import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProvisioningIssueReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    AUTHORIZATION_ISSUE = "AUTHORIZATION_ISSUE"
    RATE_LIMITED = "RATE_LIMITED"


@dataclass_json
@dataclasses.dataclass
class ProvisioningIssue:
    r"""ProvisioningIssue
    Information about issues with provisioning a Managed Certificate.
    """
    
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    reason: Optional[ProvisioningIssueReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
