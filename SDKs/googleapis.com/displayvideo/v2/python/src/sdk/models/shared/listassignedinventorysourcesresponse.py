import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignedinventorysource as shared_assignedinventorysource


@dataclass_json
@dataclasses.dataclass
class ListAssignedInventorySourcesResponse:
    r"""ListAssignedInventorySourcesResponse
    Response message for AssignedInventorySourceService.ListAssignedInventorySources.
    """
    
    assigned_inventory_sources: Optional[list[shared_assignedinventorysource.AssignedInventorySource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedInventorySources') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
