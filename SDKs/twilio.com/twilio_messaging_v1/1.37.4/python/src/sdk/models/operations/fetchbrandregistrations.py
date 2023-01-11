import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_brand_registrations as shared_messaging_v1_brand_registrations


FETCH_BRAND_REGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchBrandRegistrationsPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchBrandRegistrationsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchBrandRegistrationsRequest:
    path_params: FetchBrandRegistrationsPathParams = dataclasses.field()
    security: FetchBrandRegistrationsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchBrandRegistrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_brand_registrations: Optional[shared_messaging_v1_brand_registrations.MessagingV1BrandRegistrations] = dataclasses.field(default=None)
    
