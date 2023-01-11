import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_short_code as shared_api_v2010_account_short_code


UPDATE_SHORT_CODE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateShortCodePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateShortCodeUpdateShortCodeRequest:
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ApiVersion' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    sms_fallback_method: Optional[UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackMethod' }})
    sms_fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsFallbackUrl' }})
    sms_method: Optional[UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsMethod' }})
    sms_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsUrl' }})
    

@dataclasses.dataclass
class UpdateShortCodeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateShortCodeRequest:
    path_params: UpdateShortCodePathParams = dataclasses.field()
    security: UpdateShortCodeSecurity = dataclasses.field()
    request: Optional[UpdateShortCodeUpdateShortCodeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateShortCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_short_code: Optional[shared_api_v2010_account_short_code.APIV2010AccountShortCode] = dataclasses.field(default=None)
    
