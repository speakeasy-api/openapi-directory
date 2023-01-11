import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_brand_registrations as shared_messaging_v1_brand_registrations


UPDATE_BRAND_REGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class UpdateBrandRegistrationsPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBrandRegistrationsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateBrandRegistrationsRequest:
    path_params: UpdateBrandRegistrationsPathParams = dataclasses.field()
    security: UpdateBrandRegistrationsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateBrandRegistrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_brand_registrations: Optional[shared_messaging_v1_brand_registrations.MessagingV1BrandRegistrations] = dataclasses.field(default=None)
    
