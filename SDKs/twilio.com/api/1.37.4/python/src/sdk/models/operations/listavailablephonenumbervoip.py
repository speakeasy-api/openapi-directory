import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_available_phone_number_country_available_phone_number_voip as shared_api_v2010_account_available_phone_number_country_available_phone_number_voip


LIST_AVAILABLE_PHONE_NUMBER_VOIP_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListAvailablePhoneNumberVoipPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    country_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CountryCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAvailablePhoneNumberVoipQueryParams:
    area_code: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AreaCode', 'style': 'form', 'explode': True }})
    beta: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Beta', 'style': 'form', 'explode': True }})
    contains: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Contains', 'style': 'form', 'explode': True }})
    distance: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Distance', 'style': 'form', 'explode': True }})
    exclude_all_address_required: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExcludeAllAddressRequired', 'style': 'form', 'explode': True }})
    exclude_foreign_address_required: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExcludeForeignAddressRequired', 'style': 'form', 'explode': True }})
    exclude_local_address_required: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExcludeLocalAddressRequired', 'style': 'form', 'explode': True }})
    fax_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FaxEnabled', 'style': 'form', 'explode': True }})
    in_lata: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InLata', 'style': 'form', 'explode': True }})
    in_locality: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InLocality', 'style': 'form', 'explode': True }})
    in_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InPostalCode', 'style': 'form', 'explode': True }})
    in_rate_center: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InRateCenter', 'style': 'form', 'explode': True }})
    in_region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InRegion', 'style': 'form', 'explode': True }})
    mms_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MmsEnabled', 'style': 'form', 'explode': True }})
    near_lat_long: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NearLatLong', 'style': 'form', 'explode': True }})
    near_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NearNumber', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sms_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SmsEnabled', 'style': 'form', 'explode': True }})
    voice_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VoiceEnabled', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAvailablePhoneNumberVoipSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse:
    available_phone_numbers: Optional[list[shared_api_v2010_account_available_phone_number_country_available_phone_number_voip.APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_phone_numbers') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListAvailablePhoneNumberVoipRequest:
    path_params: ListAvailablePhoneNumberVoipPathParams = dataclasses.field()
    query_params: ListAvailablePhoneNumberVoipQueryParams = dataclasses.field()
    security: ListAvailablePhoneNumberVoipSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListAvailablePhoneNumberVoipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_available_phone_number_voip_response: Optional[ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse] = dataclasses.field(default=None)
    
