import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2clientpermissions as shared_googlecloudidentitytoolkitadminv2clientpermissions


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig
    Options related to how clients making requests on behalf of a tenant should be configured.
    """
    
    permissions: Optional[shared_googlecloudidentitytoolkitadminv2clientpermissions.GoogleCloudIdentitytoolkitAdminV2ClientPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
