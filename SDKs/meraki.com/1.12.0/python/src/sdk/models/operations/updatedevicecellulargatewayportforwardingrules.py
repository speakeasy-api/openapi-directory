import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules:
    access: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    lan_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lanIp') }})
    local_port: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPort') }})
    protocol: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    public_port: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPort') }})
    allowed_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequestBody:
    rules: Optional[list[UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesRequest:
    path_params: UpdateDeviceCellularGatewayPortForwardingRulesPathParams = dataclasses.field()
    request: Optional[UpdateDeviceCellularGatewayPortForwardingRulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceCellularGatewayPortForwardingRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_cellular_gateway_port_forwarding_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
