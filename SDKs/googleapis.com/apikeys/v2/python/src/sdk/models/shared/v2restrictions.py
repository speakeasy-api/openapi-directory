import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v2androidkeyrestrictions as shared_v2androidkeyrestrictions
from ..shared import v2apitarget as shared_v2apitarget
from ..shared import v2browserkeyrestrictions as shared_v2browserkeyrestrictions
from ..shared import v2ioskeyrestrictions as shared_v2ioskeyrestrictions
from ..shared import v2serverkeyrestrictions as shared_v2serverkeyrestrictions


@dataclass_json
@dataclasses.dataclass
class V2Restrictions:
    r"""V2Restrictions
    Describes the restrictions on the key.
    """
    
    android_key_restrictions: Optional[shared_v2androidkeyrestrictions.V2AndroidKeyRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidKeyRestrictions') }})
    api_targets: Optional[list[shared_v2apitarget.V2APITarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiTargets') }})
    browser_key_restrictions: Optional[shared_v2browserkeyrestrictions.V2BrowserKeyRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserKeyRestrictions') }})
    ios_key_restrictions: Optional[shared_v2ioskeyrestrictions.V2IosKeyRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosKeyRestrictions') }})
    server_key_restrictions: Optional[shared_v2serverkeyrestrictions.V2ServerKeyRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverKeyRestrictions') }})
    
