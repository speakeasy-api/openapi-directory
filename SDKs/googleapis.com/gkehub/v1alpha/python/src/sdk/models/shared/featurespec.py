import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membershipspec as shared_membershipspec

class FeatureSpecProvisionGoogleCaEnum(str, Enum):
    GOOGLE_CA_PROVISIONING_UNSPECIFIED = "GOOGLE_CA_PROVISIONING_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclasses.dataclass
class FeatureSpec:
    r"""FeatureSpec
    **Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.
    """
    
    default_config: Optional[shared_membershipspec.MembershipSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultConfig') }})
    provision_google_ca: Optional[FeatureSpecProvisionGoogleCaEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionGoogleCa') }})
    
