import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceCellularGatewayLanPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments:
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    mac: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges:
    comment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    end: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCellularGatewayLanRequestBody:
    fixed_ip_assignments: Optional[list[UpdateDeviceCellularGatewayLanRequestBodyFixedIPAssignments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedIpAssignments') }})
    reserved_ip_ranges: Optional[list[UpdateDeviceCellularGatewayLanRequestBodyReservedIPRanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRanges') }})
    

@dataclasses.dataclass
class UpdateDeviceCellularGatewayLanRequest:
    path_params: UpdateDeviceCellularGatewayLanPathParams = dataclasses.field()
    request: Optional[UpdateDeviceCellularGatewayLanRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceCellularGatewayLanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_cellular_gateway_lan_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
