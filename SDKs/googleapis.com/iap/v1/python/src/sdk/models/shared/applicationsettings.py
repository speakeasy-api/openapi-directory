import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessdeniedpagesettings as shared_accessdeniedpagesettings
from ..shared import attributepropagationsettings as shared_attributepropagationsettings
from ..shared import csmsettings as shared_csmsettings


@dataclass_json
@dataclasses.dataclass
class ApplicationSettings:
    r"""ApplicationSettings
    Wrapper over application specific settings for IAP.
    """
    
    access_denied_page_settings: Optional[shared_accessdeniedpagesettings.AccessDeniedPageSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessDeniedPageSettings') }})
    attribute_propagation_settings: Optional[shared_attributepropagationsettings.AttributePropagationSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePropagationSettings') }})
    cookie_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieDomain') }})
    csm_settings: Optional[shared_csmsettings.CsmSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csmSettings') }})
    
