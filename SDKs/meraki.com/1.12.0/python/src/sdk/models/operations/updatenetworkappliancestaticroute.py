import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceStaticRoutePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges:
    comment: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    end: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceStaticRouteRequestBody:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    fixed_ip_assignments: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedIpAssignments') }})
    gateway_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayIp') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reserved_ip_ranges: Optional[list[UpdateNetworkApplianceStaticRouteRequestBodyReservedIPRanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRanges') }})
    subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceStaticRouteRequest:
    path_params: UpdateNetworkApplianceStaticRoutePathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceStaticRouteRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceStaticRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_static_route_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
