import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_available_phone_number_country as shared_api_v2010_account_available_phone_number_country


LIST_AVAILABLE_PHONE_NUMBER_COUNTRY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListAvailablePhoneNumberCountryPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAvailablePhoneNumberCountryQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAvailablePhoneNumberCountrySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse:
    countries: Optional[list[shared_api_v2010_account_available_phone_number_country.APIV2010AccountAvailablePhoneNumberCountry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListAvailablePhoneNumberCountryRequest:
    path_params: ListAvailablePhoneNumberCountryPathParams = dataclasses.field()
    query_params: ListAvailablePhoneNumberCountryQueryParams = dataclasses.field()
    security: ListAvailablePhoneNumberCountrySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListAvailablePhoneNumberCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_available_phone_number_country_response: Optional[ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse] = dataclasses.field(default=None)
    
