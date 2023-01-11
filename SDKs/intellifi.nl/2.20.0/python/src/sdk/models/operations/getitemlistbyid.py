import dataclasses
from typing import Optional
from ..shared import itemlist as shared_itemlist


@dataclasses.dataclass
class GetItemListByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemListByIDRequest:
    path_params: GetItemListByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetItemListByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_list: Optional[shared_itemlist.ItemList] = dataclasses.field(default=None)
    
