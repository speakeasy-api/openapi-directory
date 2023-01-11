import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approvedecision as shared_approvedecision
from ..shared import dismissdecision as shared_dismissdecision
from ..shared import accesslocations as shared_accesslocations
from ..shared import accessreason as shared_accessreason
from ..shared import resourceproperties as shared_resourceproperties


@dataclass_json
@dataclasses.dataclass
class ApprovalRequest:
    r"""ApprovalRequest
    A request for the customer to approve access to a resource.
    """
    
    approve: Optional[shared_approvedecision.ApproveDecision] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approve') }})
    dismiss: Optional[shared_dismissdecision.DismissDecision] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTime') }})
    requested_expiration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedExpiration') }})
    requested_locations: Optional[shared_accesslocations.AccessLocations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedLocations') }})
    requested_reason: Optional[shared_accessreason.AccessReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedReason') }})
    requested_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedResourceName') }})
    requested_resource_properties: Optional[shared_resourceproperties.ResourceProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedResourceProperties') }})
    
