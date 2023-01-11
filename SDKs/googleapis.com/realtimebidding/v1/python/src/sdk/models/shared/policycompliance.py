import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policytopicentry as shared_policytopicentry

class PolicyComplianceStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PENDING_REVIEW = "PENDING_REVIEW"
    DISAPPROVED = "DISAPPROVED"
    APPROVED = "APPROVED"
    CERTIFICATE_REQUIRED = "CERTIFICATE_REQUIRED"


@dataclass_json
@dataclasses.dataclass
class PolicyCompliance:
    r"""PolicyCompliance
    Policy compliance of the creative for a transaction type or a region.
    """
    
    status: Optional[PolicyComplianceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    topics: Optional[list[shared_policytopicentry.PolicyTopicEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    
