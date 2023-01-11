import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlerpcstatus as shared_googlerpcstatus
from ..shared import googlecloudpolicysimulatorv1explainedpolicy as shared_googlecloudpolicysimulatorv1explainedpolicy

class GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1ExplainedAccess:
    r"""GoogleCloudPolicysimulatorV1ExplainedAccess
    Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
    """
    
    access_state: Optional[GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessState') }})
    errors: Optional[list[shared_googlerpcstatus.GoogleRPCStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    policies: Optional[list[shared_googlecloudpolicysimulatorv1explainedpolicy.GoogleCloudPolicysimulatorV1ExplainedPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
