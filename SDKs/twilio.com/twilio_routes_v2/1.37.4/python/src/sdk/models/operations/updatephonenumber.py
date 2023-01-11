import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import routes_v2_phone_number as shared_routes_v2_phone_number


UPDATE_PHONE_NUMBER_SERVERS = [
	"https://routes.twilio.com",
]


@dataclasses.dataclass
class UpdatePhoneNumberPathParams:
    phone_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePhoneNumberUpdatePhoneNumberRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    voice_region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceRegion' }})
    

@dataclasses.dataclass
class UpdatePhoneNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdatePhoneNumberRequest:
    path_params: UpdatePhoneNumberPathParams = dataclasses.field()
    security: UpdatePhoneNumberSecurity = dataclasses.field()
    request: Optional[UpdatePhoneNumberUpdatePhoneNumberRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdatePhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    routes_v2_phone_number: Optional[shared_routes_v2_phone_number.RoutesV2PhoneNumber] = dataclasses.field(default=None)
    
