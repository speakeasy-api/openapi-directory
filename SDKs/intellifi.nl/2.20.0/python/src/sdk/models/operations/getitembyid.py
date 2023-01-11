import dataclasses
from typing import Optional
from ..shared import item as shared_item


@dataclasses.dataclass
class GetItemByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetItemByIDRequest:
    path_params: GetItemByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetItemByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item: Optional[shared_item.Item] = dataclasses.field(default=None)
    
