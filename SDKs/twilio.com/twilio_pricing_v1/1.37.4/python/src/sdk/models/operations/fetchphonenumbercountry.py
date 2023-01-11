import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pricing_v1_phone_number_phone_number_country_instance as shared_pricing_v1_phone_number_phone_number_country_instance


FETCH_PHONE_NUMBER_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclasses.dataclass
class FetchPhoneNumberCountryPathParams:
    iso_country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchPhoneNumberCountrySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchPhoneNumberCountryRequest:
    path_params: FetchPhoneNumberCountryPathParams = dataclasses.field()
    security: FetchPhoneNumberCountrySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchPhoneNumberCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pricing_v1_phone_number_phone_number_country_instance: Optional[shared_pricing_v1_phone_number_phone_number_country_instance.PricingV1PhoneNumberPhoneNumberCountryInstance] = dataclasses.field(default=None)
    
