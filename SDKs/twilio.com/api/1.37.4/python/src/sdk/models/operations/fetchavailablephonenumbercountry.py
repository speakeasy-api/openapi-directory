import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_available_phone_number_country as shared_api_v2010_account_available_phone_number_country


FETCH_AVAILABLE_PHONE_NUMBER_COUNTRY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchAvailablePhoneNumberCountryPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    country_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CountryCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAvailablePhoneNumberCountrySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAvailablePhoneNumberCountryRequest:
    path_params: FetchAvailablePhoneNumberCountryPathParams = dataclasses.field()
    security: FetchAvailablePhoneNumberCountrySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAvailablePhoneNumberCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_available_phone_number_country: Optional[shared_api_v2010_account_available_phone_number_country.APIV2010AccountAvailablePhoneNumberCountry] = dataclasses.field(default=None)
    
