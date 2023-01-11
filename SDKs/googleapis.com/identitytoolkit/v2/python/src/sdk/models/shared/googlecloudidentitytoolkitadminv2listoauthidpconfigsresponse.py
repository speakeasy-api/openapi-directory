import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2oauthidpconfig as shared_googlecloudidentitytoolkitadminv2oauthidpconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse
    Response for ListOAuthIdpConfigs
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    oauth_idp_configs: Optional[list[shared_googlecloudidentitytoolkitadminv2oauthidpconfig.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthIdpConfigs') }})
    
