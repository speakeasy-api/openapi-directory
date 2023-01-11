import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum(str, Enum):
    POLICY_UNSPECIFIED = "POLICY_UNSPECIFIED"
    ALLOWED = "ALLOWED"
    FORBIDDEN = "FORBIDDEN"
    RESTRICTED = "RESTRICTED"


@dataclass_json
@dataclasses.dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
    Defines whether a feature can be used or what values are accepted.
    """
    
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    policy: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
