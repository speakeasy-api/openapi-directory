import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo as shared_googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse:
    r"""GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse
    FinalizeMfaEnrollment response.
    """
    
    id_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    phone_auth_info: Optional[shared_googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneAuthInfo') }})
    refresh_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    
