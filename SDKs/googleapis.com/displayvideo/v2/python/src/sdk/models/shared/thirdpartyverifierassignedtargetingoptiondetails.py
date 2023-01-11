import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adloox as shared_adloox
from ..shared import doubleverify as shared_doubleverify
from ..shared import integraladscience as shared_integraladscience


@dataclass_json
@dataclasses.dataclass
class ThirdPartyVerifierAssignedTargetingOptionDetails:
    r"""ThirdPartyVerifierAssignedTargetingOptionDetails
    Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.
    """
    
    adloox: Optional[shared_adloox.Adloox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adloox') }})
    double_verify: Optional[shared_doubleverify.DoubleVerify] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleVerify') }})
    integral_ad_science: Optional[shared_integraladscience.IntegralAdScience] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integralAdScience') }})
    
