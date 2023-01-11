import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventory as shared_inventory


@dataclass_json
@dataclasses.dataclass
class ListInventoriesResponse:
    r"""ListInventoriesResponse
    A response message for listing inventory data for all VMs in a specified location.
    """
    
    inventories: Optional[list[shared_inventory.Inventory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventories') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
