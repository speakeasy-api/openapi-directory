import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hsalgosettings as shared_hsalgosettings
from ..shared import rsalgosettings as shared_rsalgosettings
from ..shared import esalgosettings as shared_esalgosettings
from ..shared import jwksalgosettings as shared_jwksalgosettings
from ..shared import transformsettings as shared_transformsettings
from ..shared import verificationsettings as shared_verificationsettings


@dataclass_json
@dataclasses.dataclass
class Transform:
    r"""Transform
    Strategy where signature and field values are verified, trasnformed and then token si re-signed
    """
    
    algo_settings: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algoSettings') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    verification_settings: shared_verificationsettings.VerificationSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationSettings') }})
    transform_settings: Optional[shared_transformsettings.TransformSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformSettings') }})
    
