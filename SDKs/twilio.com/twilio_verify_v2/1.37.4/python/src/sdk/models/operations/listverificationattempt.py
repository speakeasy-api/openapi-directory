import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verification_attempt_enum_channels_enum as shared_verification_attempt_enum_channels_enum
from ..shared import verification_attempt_enum_conversion_status_enum as shared_verification_attempt_enum_conversion_status_enum
from ..shared import security as shared_security
from ..shared import verify_v2_verification_attempt as shared_verify_v2_verification_attempt


LIST_VERIFICATION_ATTEMPT_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class ListVerificationAttemptQueryParams:
    channel: Optional[shared_verification_attempt_enum_channels_enum.VerificationAttemptEnumChannelsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Channel', 'style': 'form', 'explode': True }})
    channel_data_to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ChannelData.To', 'style': 'form', 'explode': True }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Country', 'style': 'form', 'explode': True }})
    date_created_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_verification_attempt_enum_conversion_status_enum.VerificationAttemptEnumConversionStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    verification_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VerificationSid', 'style': 'form', 'explode': True }})
    verify_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VerifyServiceSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListVerificationAttemptSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListVerificationAttemptListVerificationAttemptResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListVerificationAttemptListVerificationAttemptResponse:
    attempts: Optional[list[shared_verify_v2_verification_attempt.VerifyV2VerificationAttempt]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    meta: Optional[ListVerificationAttemptListVerificationAttemptResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListVerificationAttemptRequest:
    query_params: ListVerificationAttemptQueryParams = dataclasses.field()
    security: ListVerificationAttemptSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListVerificationAttemptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_verification_attempt_response: Optional[ListVerificationAttemptListVerificationAttemptResponse] = dataclasses.field(default=None)
    
