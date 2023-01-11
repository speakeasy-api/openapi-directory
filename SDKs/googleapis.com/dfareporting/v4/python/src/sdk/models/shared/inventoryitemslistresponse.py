import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventoryitem as shared_inventoryitem


@dataclass_json
@dataclasses.dataclass
class InventoryItemsListResponse:
    r"""InventoryItemsListResponse
    Inventory item List Response
    """
    
    inventory_items: Optional[list[shared_inventoryitem.InventoryItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryItems') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
