import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitv2startmfaphoneresponseinfo as shared_googlecloudidentitytoolkitv2startmfaphoneresponseinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse:
    r"""GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse
    StartMfaEnrollment response.
    """
    
    phone_session_info: Optional[shared_googlecloudidentitytoolkitv2startmfaphoneresponseinfo.GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneSessionInfo') }})
    
