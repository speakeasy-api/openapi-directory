import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicytroubleshooterv1bindingexplanation as shared_googlecloudpolicytroubleshooterv1bindingexplanation
from ..shared import googleiamv1policy as shared_googleiamv1policy

class GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"

class GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicytroubleshooterV1ExplainedPolicy:
    r"""GoogleCloudPolicytroubleshooterV1ExplainedPolicy
    Details about how a specific IAM Policy contributed to the access check.
    """
    
    access: Optional[GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    binding_explanations: Optional[list[shared_googlecloudpolicytroubleshooterv1bindingexplanation.GoogleCloudPolicytroubleshooterV1BindingExplanation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindingExplanations') }})
    full_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    policy: Optional[shared_googleiamv1policy.GoogleIamV1Policy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    relevance: Optional[GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevance') }})
    
