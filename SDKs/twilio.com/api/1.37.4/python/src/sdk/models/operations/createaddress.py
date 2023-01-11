import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_address as shared_api_v2010_account_address


CREATE_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateAddressPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAddressCreateAddressRequest:
    city: str = dataclasses.field(metadata={'form': { 'field_name': 'City' }})
    customer_name: str = dataclasses.field(metadata={'form': { 'field_name': 'CustomerName' }})
    iso_country: str = dataclasses.field(metadata={'form': { 'field_name': 'IsoCountry' }})
    postal_code: str = dataclasses.field(metadata={'form': { 'field_name': 'PostalCode' }})
    region: str = dataclasses.field(metadata={'form': { 'field_name': 'Region' }})
    street: str = dataclasses.field(metadata={'form': { 'field_name': 'Street' }})
    auto_correct_address: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCorrectAddress' }})
    emergency_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyEnabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAddressRequest:
    path_params: CreateAddressPathParams = dataclasses.field()
    security: CreateAddressSecurity = dataclasses.field()
    request: Optional[CreateAddressCreateAddressRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_address: Optional[shared_api_v2010_account_address.APIV2010AccountAddress] = dataclasses.field(default=None)
    
