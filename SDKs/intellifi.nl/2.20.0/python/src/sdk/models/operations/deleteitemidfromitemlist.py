import dataclasses
from typing import Optional
from ..shared import responselistresource as shared_responselistresource


@dataclasses.dataclass
class DeleteItemIDFromItemListPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    item_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteItemIDFromItemListRequest:
    path_params: DeleteItemIDFromItemListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteItemIDFromItemListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_list_resource: Optional[shared_responselistresource.ResponseListResource] = dataclasses.field(default=None)
    
