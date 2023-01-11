import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2oauthresponsetype as shared_googlecloudidentitytoolkitadminv2oauthresponsetype


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
    Configuration options for authenticating with an OAuth IDP.
    """
    
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    response_type: Optional[shared_googlecloudidentitytoolkitadminv2oauthresponsetype.GoogleCloudIdentitytoolkitAdminV2OAuthResponseType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseType') }})
    
