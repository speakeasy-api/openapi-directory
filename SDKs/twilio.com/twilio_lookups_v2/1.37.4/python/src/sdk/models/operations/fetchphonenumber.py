import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import lookups_v2_phone_number as shared_lookups_v2_phone_number


FETCH_PHONE_NUMBER_SERVERS = [
	"https://lookups.twilio.com",
]


@dataclasses.dataclass
class FetchPhoneNumberPathParams:
    phone_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchPhoneNumberQueryParams:
    address_country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AddressCountryCode', 'style': 'form', 'explode': True }})
    address_line1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AddressLine1', 'style': 'form', 'explode': True }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AddressLine2', 'style': 'form', 'explode': True }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'City', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    date_of_birth: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateOfBirth', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Fields', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FirstName', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'LastName', 'style': 'form', 'explode': True }})
    national_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NationalId', 'style': 'form', 'explode': True }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PostalCode', 'style': 'form', 'explode': True }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'State', 'style': 'form', 'explode': True }})
    

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
    lookups_v2_phone_number: Optional[shared_lookups_v2_phone_number.LookupsV2PhoneNumber] = dataclasses.field(default=None)
    
