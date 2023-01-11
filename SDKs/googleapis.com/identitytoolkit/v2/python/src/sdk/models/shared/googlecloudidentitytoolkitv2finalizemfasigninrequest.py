import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitv2finalizemfaphonerequestinfo as shared_googlecloudidentitytoolkitv2finalizemfaphonerequestinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest:
    r"""GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest
    Finalizes sign-in by verifying MFA challenge.
    """
    
    mfa_pending_credential: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaPendingCredential') }})
    phone_verification_info: Optional[shared_googlecloudidentitytoolkitv2finalizemfaphonerequestinfo.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneVerificationInfo') }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    
