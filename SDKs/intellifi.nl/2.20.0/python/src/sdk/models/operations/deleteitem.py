import dataclasses
from typing import Optional
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class DeleteItemPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteItemRequest:
    path_params: DeleteItemPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
