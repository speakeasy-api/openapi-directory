import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingassignment as shared_billingassignment


@dataclass_json
@dataclasses.dataclass
class BillingAssignmentsListResponse:
    r"""BillingAssignmentsListResponse
    Billing assignment List Response
    """
    
    billing_assignments: Optional[list[shared_billingassignment.BillingAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingAssignments') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
