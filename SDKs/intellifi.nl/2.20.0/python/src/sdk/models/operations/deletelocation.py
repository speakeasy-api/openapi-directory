import dataclasses
from typing import Optional
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class DeleteLocationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLocationRequest:
    path_params: DeleteLocationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
