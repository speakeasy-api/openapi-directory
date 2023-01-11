import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicytroubleshooterv1betaexplainedpolicy as shared_googlecloudpolicytroubleshooterv1betaexplainedpolicy

class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse:
    r"""GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse
    Response for TroubleshootIamPolicy.
    """
    
    access: Optional[GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    explained_policies: Optional[list[shared_googlecloudpolicytroubleshooterv1betaexplainedpolicy.GoogleCloudPolicytroubleshooterV1betaExplainedPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explainedPolicies') }})
    
