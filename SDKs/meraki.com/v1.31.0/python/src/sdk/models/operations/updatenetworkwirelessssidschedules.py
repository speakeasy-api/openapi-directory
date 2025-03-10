"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges:
    
    end_day: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endDay') }})
    r"""Day of when the outage ends. Can be either full day name, or three letter abbreviation"""  
    end_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endTime') }})
    r"""24 hour time when the outage ends."""  
    start_day: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('startDay') }})
    r"""Day of when the outage starts. Can be either full day name, or three letter abbreviation."""  
    start_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('startTime') }})
    r"""24 hour time when the outage starts."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds:
    
    end: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('end') }})
    r"""Seconds since Sunday at midnight when that outage range ends."""  
    start: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('start') }})
    r"""Seconds since Sunday at midnight when the outage range starts."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBody:
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enabled'), 'exclude': lambda f: f is None }})
    r"""If true, the SSID outage schedule is enabled."""  
    ranges: Optional[list[UpdateNetworkWirelessSsidSchedulesRequestBodyRanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ranges'), 'exclude': lambda f: f is None }})
    r"""List of outage ranges. Has a start date and time, and end date and time. If this parameter is passed in along with rangesInSeconds parameter, this will take precedence."""  
    ranges_in_seconds: Optional[list[UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rangesInSeconds'), 'exclude': lambda f: f is None }})
    r"""List of outage ranges in seconds since Sunday at Midnight. Has a start and end. If this parameter is passed in along with the ranges parameter, ranges will take precedence."""  
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesRequest:
    
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})  
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})  
    request_body: Optional[UpdateNetworkWirelessSsidSchedulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    update_network_wireless_ssid_schedules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Successful operation"""  
    