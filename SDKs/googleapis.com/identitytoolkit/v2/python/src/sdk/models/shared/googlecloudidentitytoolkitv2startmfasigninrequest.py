import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitv2startmfaphonerequestinfo as shared_googlecloudidentitytoolkitv2startmfaphonerequestinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitV2StartMfaSignInRequest:
    r"""GoogleCloudIdentitytoolkitV2StartMfaSignInRequest
    Starts multi-factor sign-in by sending the multi-factor auth challenge.
    """
    
    mfa_enrollment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaEnrollmentId') }})
    mfa_pending_credential: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaPendingCredential') }})
    phone_sign_in_info: Optional[shared_googlecloudidentitytoolkitv2startmfaphonerequestinfo.GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneSignInInfo') }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    
