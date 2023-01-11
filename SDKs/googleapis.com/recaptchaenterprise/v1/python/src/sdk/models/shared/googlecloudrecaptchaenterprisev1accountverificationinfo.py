import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecaptchaenterprisev1endpointverificationinfo as shared_googlecloudrecaptchaenterprisev1endpointverificationinfo
from ..shared import googlecloudrecaptchaenterprisev1endpointverificationinfo as shared_googlecloudrecaptchaenterprisev1endpointverificationinfo

class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum(str, Enum):
    RESULT_UNSPECIFIED = "RESULT_UNSPECIFIED"
    SUCCESS_USER_VERIFIED = "SUCCESS_USER_VERIFIED"
    ERROR_USER_NOT_VERIFIED = "ERROR_USER_NOT_VERIFIED"
    ERROR_SITE_ONBOARDING_INCOMPLETE = "ERROR_SITE_ONBOARDING_INCOMPLETE"
    ERROR_RECIPIENT_NOT_ALLOWED = "ERROR_RECIPIENT_NOT_ALLOWED"
    ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED = "ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED"
    ERROR_CRITICAL_INTERNAL = "ERROR_CRITICAL_INTERNAL"
    ERROR_CUSTOMER_QUOTA_EXHAUSTED = "ERROR_CUSTOMER_QUOTA_EXHAUSTED"
    ERROR_VERIFICATION_BYPASSED = "ERROR_VERIFICATION_BYPASSED"
    ERROR_VERDICT_MISMATCH = "ERROR_VERDICT_MISMATCH"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput:
    r"""GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput
    Information about account verification, used for identity verification.
    """
    
    endpoints: Optional[list[shared_googlecloudrecaptchaenterprisev1endpointverificationinfo.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo:
    r"""GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo
    Information about account verification, used for identity verification.
    """
    
    endpoints: Optional[list[shared_googlecloudrecaptchaenterprisev1endpointverificationinfo.GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoints') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latest_verification_result: Optional[GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestVerificationResult') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
