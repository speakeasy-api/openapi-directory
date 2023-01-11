import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import verification_enum_status_enum as shared_verification_enum_status_enum
from ..shared import security as shared_security
from ..shared import verify_v2_service_verification as shared_verify_v2_service_verification


UPDATE_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class UpdateVerificationPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateVerificationUpdateVerificationRequest:
    status: shared_verification_enum_status_enum.VerificationEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateVerificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateVerificationRequest:
    path_params: UpdateVerificationPathParams = dataclasses.field()
    security: UpdateVerificationSecurity = dataclasses.field()
    request: Optional[UpdateVerificationUpdateVerificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_verification: Optional[shared_verify_v2_service_verification.VerifyV2ServiceVerification] = dataclasses.field(default=None)
    
