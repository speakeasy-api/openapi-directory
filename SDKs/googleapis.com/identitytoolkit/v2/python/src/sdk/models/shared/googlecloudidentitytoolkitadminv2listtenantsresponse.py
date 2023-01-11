import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2tenant as shared_googlecloudidentitytoolkitadminv2tenant


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse
    Response message for ListTenants.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tenants: Optional[list[shared_googlecloudidentitytoolkitadminv2tenant.GoogleCloudIdentitytoolkitAdminV2Tenant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenants') }})
    
