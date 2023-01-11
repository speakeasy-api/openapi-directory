import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput:
    r"""GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput
    Information about a verification endpoint that can be used for 2FA.
    """
    
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo:
    r"""GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo
    Information about a verification endpoint that can be used for 2FA.
    """
    
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    last_verification_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastVerificationTime') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestToken') }})
    
