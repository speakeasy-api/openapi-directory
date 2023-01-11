import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignedinventorysource as shared_assignedinventorysource


@dataclass_json
@dataclasses.dataclass
class BulkEditAssignedInventorySourcesRequestInput:
    r"""BulkEditAssignedInventorySourcesRequestInput
    Request message for AssignedInventorySourceService.BulkEdit.
    """
    
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    created_assigned_inventory_sources: Optional[list[shared_assignedinventorysource.AssignedInventorySourceInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAssignedInventorySources') }})
    deleted_assigned_inventory_sources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedAssignedInventorySources') }})
    partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    
