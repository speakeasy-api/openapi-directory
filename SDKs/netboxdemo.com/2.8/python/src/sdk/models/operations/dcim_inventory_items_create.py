import dataclasses
from typing import Optional
from ..shared import writableinventoryitem as shared_writableinventoryitem
from ..shared import inventoryitem as shared_inventoryitem


@dataclasses.dataclass
class DcimInventoryItemsCreateRequest:
    request: shared_writableinventoryitem.WritableInventoryItemInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInventoryItemsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_item: Optional[shared_inventoryitem.InventoryItem] = dataclasses.field(default=None)
    
