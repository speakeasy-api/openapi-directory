import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassuredworkloadsv1violationremediationinstructions as shared_googlecloudassuredworkloadsv1violationremediationinstructions

class GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum(str, Enum):
    REMEDIATION_TYPE_UNSPECIFIED = "REMEDIATION_TYPE_UNSPECIFIED"
    REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION"
    REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION"
    REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION"
    REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1ViolationRemediation:
    r"""GoogleCloudAssuredworkloadsV1ViolationRemediation
    Represents remediation guidance to resolve compliance violation for AssuredWorkload
    """
    
    compliant_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliantValues') }})
    instructions: Optional[shared_googlecloudassuredworkloadsv1violationremediationinstructions.GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructions') }})
    remediation_type: Optional[GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediationType') }})
    
