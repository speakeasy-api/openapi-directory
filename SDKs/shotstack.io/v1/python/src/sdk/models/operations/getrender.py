import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import renderresponse as shared_renderresponse


@dataclasses.dataclass
class GetRenderPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRenderSecurity:
    developer_key: shared_security.SchemeDeveloperKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetRenderRequest:
    path_params: GetRenderPathParams = dataclasses.field()
    security: GetRenderSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    render_response: Optional[shared_renderresponse.RenderResponse] = dataclasses.field(default=None)
    
