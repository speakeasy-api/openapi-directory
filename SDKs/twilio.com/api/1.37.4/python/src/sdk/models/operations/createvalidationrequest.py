import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_validation_request as shared_api_v2010_account_validation_request


CREATE_VALIDATION_REQUEST_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateValidationRequestPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateValidationRequestCreateValidationRequestRequest:
    phone_number: str = dataclasses.field(metadata={'form': { 'field_name': 'PhoneNumber' }})
    call_delay: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallDelay' }})
    extension: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Extension' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclasses.dataclass
class CreateValidationRequestSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateValidationRequestRequest:
    path_params: CreateValidationRequestPathParams = dataclasses.field()
    security: CreateValidationRequestSecurity = dataclasses.field()
    request: Optional[CreateValidationRequestCreateValidationRequestRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateValidationRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_validation_request: Optional[shared_api_v2010_account_validation_request.APIV2010AccountValidationRequest] = dataclasses.field(default=None)
    
