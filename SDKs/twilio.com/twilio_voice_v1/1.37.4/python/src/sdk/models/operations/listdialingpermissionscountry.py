import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import voice_v1_dialing_permissions_dialing_permissions_country as shared_voice_v1_dialing_permissions_dialing_permissions_country


LIST_DIALING_PERMISSIONS_COUNTRY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class ListDialingPermissionsCountryQueryParams:
    continent: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Continent', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    high_risk_special_numbers_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HighRiskSpecialNumbersEnabled', 'style': 'form', 'explode': True }})
    high_risk_tollfraud_numbers_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HighRiskTollfraudNumbersEnabled', 'style': 'form', 'explode': True }})
    iso_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IsoCode', 'style': 'form', 'explode': True }})
    low_risk_numbers_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'LowRiskNumbersEnabled', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDialingPermissionsCountrySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDialingPermissionsCountryListDialingPermissionsCountryResponse:
    content: Optional[list[shared_voice_v1_dialing_permissions_dialing_permissions_country.VoiceV1DialingPermissionsDialingPermissionsCountry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    meta: Optional[ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListDialingPermissionsCountryRequest:
    query_params: ListDialingPermissionsCountryQueryParams = dataclasses.field()
    security: ListDialingPermissionsCountrySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListDialingPermissionsCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_dialing_permissions_country_response: Optional[ListDialingPermissionsCountryListDialingPermissionsCountryResponse] = dataclasses.field(default=None)
    
