"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LockNetworkSmDevicesRequestBody:
    
    ids: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ids'), 'exclude': lambda f: f is None }})
    r"""The ids of the devices to be locked."""  
    pin: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pin'), 'exclude': lambda f: f is None }})
    r"""The pin number for locking macOS devices (a six digit number). Required only for macOS devices."""  
    scope: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scope'), 'exclude': lambda f: f is None }})
    r"""The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped."""  
    serials: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('serials'), 'exclude': lambda f: f is None }})
    r"""The serials of the devices to be locked."""  
    wifi_macs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('wifiMacs'), 'exclude': lambda f: f is None }})
    r"""The wifiMacs of the devices to be locked."""  
    

@dataclasses.dataclass
class LockNetworkSmDevicesRequest:
    
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'network_id', 'style': 'simple', 'explode': False }})  
    request_body: Optional[LockNetworkSmDevicesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class LockNetworkSmDevicesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    lock_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    