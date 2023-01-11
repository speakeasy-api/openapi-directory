import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyassignmentlabelset as shared_ospolicyassignmentlabelset
from ..shared import ospolicyassignmentinstancefilterinventory as shared_ospolicyassignmentinstancefilterinventory


@dataclass_json
@dataclasses.dataclass
class OsPolicyAssignmentInstanceFilter:
    r"""OsPolicyAssignmentInstanceFilter
    Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
    """
    
    all: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    exclusion_labels: Optional[list[shared_ospolicyassignmentlabelset.OsPolicyAssignmentLabelSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionLabels') }})
    inclusion_labels: Optional[list[shared_ospolicyassignmentlabelset.OsPolicyAssignmentLabelSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusionLabels') }})
    inventories: Optional[list[shared_ospolicyassignmentinstancefilterinventory.OsPolicyAssignmentInstanceFilterInventory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventories') }})
    os_short_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osShortNames') }})
    
