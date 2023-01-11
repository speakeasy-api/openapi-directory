import dataclasses
from typing import Optional
from ..shared import inventoryitem as shared_inventoryitem


@dataclasses.dataclass
class DcimInventoryItemsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInventoryItemsReadRequest:
    path_params: DcimInventoryItemsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInventoryItemsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_item: Optional[shared_inventoryitem.InventoryItem] = dataclasses.field(default=None)
    
