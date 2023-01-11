import dataclasses
from typing import Optional
from ..shared import responselistresource as shared_responselistresource


@dataclasses.dataclass
class DeleteItemIDFromSpotListPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    item_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteItemIDFromSpotListRequest:
    path_params: DeleteItemIDFromSpotListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteItemIDFromSpotListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_list_resource: Optional[shared_responselistresource.ResponseListResource] = dataclasses.field(default=None)
    
