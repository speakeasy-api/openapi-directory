import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_address as shared_api_v2010_account_address


UPDATE_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateAddressPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAddressUpdateAddressRequest:
    auto_correct_address: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCorrectAddress' }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'City' }})
    customer_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CustomerName' }})
    emergency_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyEnabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostalCode' }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Region' }})
    street: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Street' }})
    

@dataclasses.dataclass
class UpdateAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateAddressRequest:
    path_params: UpdateAddressPathParams = dataclasses.field()
    security: UpdateAddressSecurity = dataclasses.field()
    request: Optional[UpdateAddressUpdateAddressRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_address: Optional[shared_api_v2010_account_address.APIV2010AccountAddress] = dataclasses.field(default=None)
    
