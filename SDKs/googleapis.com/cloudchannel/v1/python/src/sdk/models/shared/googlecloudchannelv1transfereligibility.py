import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    PENDING_TOS_ACCEPTANCE = "PENDING_TOS_ACCEPTANCE"
    SKU_NOT_ELIGIBLE = "SKU_NOT_ELIGIBLE"
    SKU_SUSPENDED = "SKU_SUSPENDED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1TransferEligibility:
    r"""GoogleCloudChannelV1TransferEligibility
    Specifies transfer eligibility of a SKU.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ineligibility_reason: Optional[GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ineligibilityReason') }})
    is_eligible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEligible') }})
    
