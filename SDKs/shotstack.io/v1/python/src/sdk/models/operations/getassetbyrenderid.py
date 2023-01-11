import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assetrenderresponse as shared_assetrenderresponse


@dataclasses.dataclass
class GetAssetByRenderIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetByRenderIDSecurity:
    developer_key: shared_security.SchemeDeveloperKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAssetByRenderIDRequest:
    path_params: GetAssetByRenderIDPathParams = dataclasses.field()
    security: GetAssetByRenderIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetByRenderIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_render_response: Optional[shared_assetrenderresponse.AssetRenderResponse] = dataclasses.field(default=None)
    
