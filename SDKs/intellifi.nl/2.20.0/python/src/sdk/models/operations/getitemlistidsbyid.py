import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetItemListIdsByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemListIdsByIDRequest:
    path_params: GetItemListIdsByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetItemListIdsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_of_item_ids: Optional[list[str]] = dataclasses.field(default=None)
    
