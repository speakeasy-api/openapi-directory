import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tollfree_verification_enum_status_enum as shared_tollfree_verification_enum_status_enum
from ..shared import security as shared_security
from ..shared import messaging_v1_tollfree_verification as shared_messaging_v1_tollfree_verification


LIST_TOLLFREE_VERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class ListTollfreeVerificationQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_tollfree_verification_enum_status_enum.TollfreeVerificationEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    tollfree_phone_number_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TollfreePhoneNumberSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListTollfreeVerificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListTollfreeVerificationListTollfreeVerificationResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListTollfreeVerificationListTollfreeVerificationResponse:
    meta: Optional[ListTollfreeVerificationListTollfreeVerificationResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    verifications: Optional[list[shared_messaging_v1_tollfree_verification.MessagingV1TollfreeVerification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifications') }})
    

@dataclasses.dataclass
class ListTollfreeVerificationRequest:
    query_params: ListTollfreeVerificationQueryParams = dataclasses.field()
    security: ListTollfreeVerificationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListTollfreeVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_tollfree_verification_response: Optional[ListTollfreeVerificationListTollfreeVerificationResponse] = dataclasses.field(default=None)
    
