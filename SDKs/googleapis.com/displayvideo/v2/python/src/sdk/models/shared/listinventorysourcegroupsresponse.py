import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventorysourcegroup as shared_inventorysourcegroup


@dataclass_json
@dataclasses.dataclass
class ListInventorySourceGroupsResponse:
    r"""ListInventorySourceGroupsResponse
    Response message for InventorySourceGroupService.ListInventorySourceGroups.
    """
    
    inventory_source_groups: Optional[list[shared_inventorysourcegroup.InventorySourceGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceGroups') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
