import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges:
    end_day: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDay') }})
    end_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_day: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDay') }})
    start_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds:
    end: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesRequestBody:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ranges: Optional[list[UpdateNetworkWirelessSsidSchedulesRequestBodyRanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranges') }})
    ranges_in_seconds: Optional[list[UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangesInSeconds') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesRequest:
    path_params: UpdateNetworkWirelessSsidSchedulesPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidSchedulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidSchedulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_schedules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
