import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleiamv1policy as shared_googleiamv1policy

class GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum(str, Enum):
    LOG_SOURCE_UNSPECIFIED = "LOG_SOURCE_UNSPECIFIED"
    RECENT_ACCESSES = "RECENT_ACCESSES"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1beta1ReplayConfig:
    r"""GoogleCloudPolicysimulatorV1beta1ReplayConfig
    The configuration used for a Replay.
    """
    
    log_source: Optional[GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logSource') }})
    policy_overlay: Optional[dict[str, shared_googleiamv1policy.GoogleIamV1Policy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyOverlay') }})
    
