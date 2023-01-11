import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitv2autoretrievalinfo as shared_googlecloudidentitytoolkitv2autoretrievalinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo:
    r"""GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo
    App Verification info for a StartMfa request.
    """
    
    auto_retrieval_info: Optional[shared_googlecloudidentitytoolkitv2autoretrievalinfo.GoogleCloudIdentitytoolkitV2AutoRetrievalInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRetrievalInfo') }})
    ios_receipt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosReceipt') }})
    ios_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosSecret') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    recaptcha_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recaptchaToken') }})
    safety_net_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safetyNetToken') }})
    
