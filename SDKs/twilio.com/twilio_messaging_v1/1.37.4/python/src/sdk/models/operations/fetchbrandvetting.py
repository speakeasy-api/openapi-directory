import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_brand_registrations_brand_vetting as shared_messaging_v1_brand_registrations_brand_vetting


FETCH_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchBrandVettingPathParams:
    brand_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    brand_vetting_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BrandVettingSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchBrandVettingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchBrandVettingRequest:
    path_params: FetchBrandVettingPathParams = dataclasses.field()
    security: FetchBrandVettingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchBrandVettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_brand_registrations_brand_vetting: Optional[shared_messaging_v1_brand_registrations_brand_vetting.MessagingV1BrandRegistrationsBrandVetting] = dataclasses.field(default=None)
    
