import dataclasses
from typing import Optional
from ..shared import responselistresource as shared_responselistresource


@dataclasses.dataclass
class AddItemIdsSpotListPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddItemIdsSpotListRequest:
    path_params: AddItemIdsSpotListPathParams = dataclasses.field()
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddItemIdsSpotListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_list_resource: Optional[shared_responselistresource.ResponseListResource] = dataclasses.field(default=None)
    
