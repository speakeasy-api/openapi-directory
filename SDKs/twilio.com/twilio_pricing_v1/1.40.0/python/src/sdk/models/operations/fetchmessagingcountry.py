"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import pricing_v1_messaging_messaging_country_instance as shared_pricing_v1_messaging_messaging_country_instance
from typing import Optional

FETCH_MESSAGING_COUNTRY_SERVERS = [
	"https://pricing.twilio.com",
]


@dataclasses.dataclass
class FetchMessagingCountrySecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class FetchMessagingCountryRequest:
    
    iso_country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'IsoCountry', 'style': 'simple', 'explode': False }})
    r"""The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the pricing information to fetch."""  
    

@dataclasses.dataclass
class FetchMessagingCountryResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    pricing_v1_messaging_messaging_country_instance: Optional[shared_pricing_v1_messaging_messaging_country_instance.PricingV1MessagingMessagingCountryInstance] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    