import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2applesigninconfig as shared_googlecloudidentitytoolkitadminv2applesigninconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig
    Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
    """
    
    apple_sign_in_config: Optional[shared_googlecloudidentitytoolkitadminv2applesigninconfig.GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appleSignInConfig') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
