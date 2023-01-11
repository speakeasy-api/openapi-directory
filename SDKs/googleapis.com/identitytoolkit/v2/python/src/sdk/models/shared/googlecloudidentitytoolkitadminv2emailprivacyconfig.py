import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig
    Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness.
    """
    
    enable_improved_email_privacy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableImprovedEmailPrivacy') }})
    
