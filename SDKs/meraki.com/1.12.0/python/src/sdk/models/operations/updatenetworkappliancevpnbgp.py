import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceVpnBgpPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVpnBgpRequestBodyNeighbors:
    ebgp_hold_timer: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebgpHoldTimer') }})
    ebgp_multihop: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebgpMultihop') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    remote_as_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAsNumber') }})
    allow_transit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowTransit') }})
    receive_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiveLimit') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVpnBgpRequestBody:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    as_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asNumber') }})
    ibgp_hold_timer: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ibgpHoldTimer') }})
    neighbors: Optional[list[UpdateNetworkApplianceVpnBgpRequestBodyNeighbors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neighbors') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceVpnBgpRequest:
    path_params: UpdateNetworkApplianceVpnBgpPathParams = dataclasses.field()
    request: UpdateNetworkApplianceVpnBgpRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceVpnBgpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_vpn_bgp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
