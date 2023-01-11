import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import lookups_v1_phone_number as shared_lookups_v1_phone_number


FETCH_PHONE_NUMBER_SERVERS = [
	"https://lookups.twilio.com",
]


@dataclasses.dataclass
class FetchPhoneNumberPathParams:
    phone_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchPhoneNumberQueryParams:
    add_ons: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AddOns', 'style': 'form', 'explode': True }})
    add_ons_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AddOnsData', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchPhoneNumberSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchPhoneNumberRequest:
    path_params: FetchPhoneNumberPathParams = dataclasses.field()
    query_params: FetchPhoneNumberQueryParams = dataclasses.field()
    security: FetchPhoneNumberSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchPhoneNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lookups_v1_phone_number: Optional[shared_lookups_v1_phone_number.LookupsV1PhoneNumber] = dataclasses.field(default=None)
    
