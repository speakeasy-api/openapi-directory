"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import api_v2010_account_address as shared_api_v2010_account_address
from typing import Optional

UPDATE_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateAddressSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class UpdateAddressUpdateAddressRequest:
    
    auto_correct_address: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AutoCorrectAddress' }})
    r"""Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won't alter the address you provide."""  
    city: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'City' }})
    r"""The city of the address."""  
    customer_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CustomerName' }})
    r"""The name to associate with the address."""  
    emergency_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmergencyEnabled' }})
    r"""Whether to enable emergency calling on the address. Can be: `true` or `false`."""  
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    r"""A descriptive string that you create to describe the address. It can be up to 64 characters long."""  
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostalCode' }})
    r"""The postal code of the address."""  
    region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Region' }})
    r"""The state or region of the address."""  
    street: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Street' }})
    r"""The number and street address of the address."""  
    street_secondary: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StreetSecondary' }})
    r"""The additional number and street address of the address."""  
    

@dataclasses.dataclass
class UpdateAddressRequest:
    
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    r"""The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource to update."""  
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    r"""The Twilio-provided string that uniquely identifies the Address resource to update."""  
    request_body: Optional[UpdateAddressUpdateAddressRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})  
    

@dataclasses.dataclass
class UpdateAddressResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_v2010_account_address: Optional[shared_api_v2010_account_address.APIV2010AccountAddress] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    