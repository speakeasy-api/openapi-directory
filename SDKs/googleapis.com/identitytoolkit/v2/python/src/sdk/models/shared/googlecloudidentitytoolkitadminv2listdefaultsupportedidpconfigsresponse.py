import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2defaultsupportedidpconfig as shared_googlecloudidentitytoolkitadminv2defaultsupportedidpconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse
    Response for DefaultSupportedIdpConfigs
    """
    
    default_supported_idp_configs: Optional[list[shared_googlecloudidentitytoolkitadminv2defaultsupportedidpconfig.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSupportedIdpConfigs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
