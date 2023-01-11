import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2allowbydefault as shared_googlecloudidentitytoolkitadminv2allowbydefault
from ..shared import googlecloudidentitytoolkitadminv2allowlistonly as shared_googlecloudidentitytoolkitadminv2allowlistonly


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig
    Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.
    """
    
    allow_by_default: Optional[shared_googlecloudidentitytoolkitadminv2allowbydefault.GoogleCloudIdentitytoolkitAdminV2AllowByDefault] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowByDefault') }})
    allowlist_only: Optional[shared_googlecloudidentitytoolkitadminv2allowlistonly.GoogleCloudIdentitytoolkitAdminV2AllowlistOnly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowlistOnly') }})
    
