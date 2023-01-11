import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import verification_attempts_summary_enum_channels_enum as shared_verification_attempts_summary_enum_channels_enum
from ..shared import security as shared_security
from ..shared import verify_v2_verification_attempts_summary as shared_verify_v2_verification_attempts_summary


FETCH_VERIFICATION_ATTEMPTS_SUMMARY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchVerificationAttemptsSummaryQueryParams:
    channel: Optional[shared_verification_attempts_summary_enum_channels_enum.VerificationAttemptsSummaryEnumChannelsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Channel', 'style': 'form', 'explode': True }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Country', 'style': 'form', 'explode': True }})
    date_created_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    destination_prefix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DestinationPrefix', 'style': 'form', 'explode': True }})
    verify_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VerifyServiceSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchVerificationAttemptsSummarySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchVerificationAttemptsSummaryRequest:
    query_params: FetchVerificationAttemptsSummaryQueryParams = dataclasses.field()
    security: FetchVerificationAttemptsSummarySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchVerificationAttemptsSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_verification_attempts_summary: Optional[shared_verify_v2_verification_attempts_summary.VerifyV2VerificationAttemptsSummary] = dataclasses.field(default=None)
    
