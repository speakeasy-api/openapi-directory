import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pricing_v1_messaging_messaging_country_instance as shared_pricing_v1_messaging_messaging_country_instance


FETCH_MESSAGING_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclasses.dataclass
class FetchMessagingCountryPathParams:
    iso_country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMessagingCountrySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMessagingCountryRequest:
    path_params: FetchMessagingCountryPathParams = dataclasses.field()
    security: FetchMessagingCountrySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMessagingCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_v1_messaging_messaging_country_instance: Optional[shared_pricing_v1_messaging_messaging_country_instance.PricingV1MessagingMessagingCountryInstance] = dataclasses.field(default=None)
    
