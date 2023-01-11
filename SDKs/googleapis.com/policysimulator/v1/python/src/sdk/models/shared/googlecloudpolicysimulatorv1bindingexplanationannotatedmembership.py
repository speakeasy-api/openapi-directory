import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipMembershipEnum(str, Enum):
    MEMBERSHIP_UNSPECIFIED = "MEMBERSHIP_UNSPECIFIED"
    MEMBERSHIP_INCLUDED = "MEMBERSHIP_INCLUDED"
    MEMBERSHIP_NOT_INCLUDED = "MEMBERSHIP_NOT_INCLUDED"
    MEMBERSHIP_UNKNOWN_INFO_DENIED = "MEMBERSHIP_UNKNOWN_INFO_DENIED"
    MEMBERSHIP_UNKNOWN_UNSUPPORTED = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"

class GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership:
    membership: Optional[GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipMembershipEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership') }})
    relevance: Optional[GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembershipRelevanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevance') }})
    
