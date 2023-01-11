import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlerpcstatus as shared_googlerpcstatus
from ..shared import googlecloudpolicytroubleshooterv1explainedpolicy as shared_googlecloudpolicytroubleshooterv1explainedpolicy

class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse:
    r"""GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse
    Response for TroubleshootIamPolicy.
    """
    
    access: Optional[GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    errors: Optional[list[shared_googlerpcstatus.GoogleRPCStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    explained_policies: Optional[list[shared_googlecloudpolicytroubleshooterv1explainedpolicy.GoogleCloudPolicytroubleshooterV1ExplainedPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explainedPolicies') }})
    
