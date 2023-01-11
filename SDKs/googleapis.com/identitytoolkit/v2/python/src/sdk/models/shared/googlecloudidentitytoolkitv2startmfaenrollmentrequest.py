import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitv2startmfaphonerequestinfo as shared_googlecloudidentitytoolkitv2startmfaphonerequestinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest:
    r"""GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest
    Sends MFA enrollment verification SMS for a user.
    """
    
    id_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    phone_enrollment_info: Optional[shared_googlecloudidentitytoolkitv2startmfaphonerequestinfo.GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneEnrollmentInfo') }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    
