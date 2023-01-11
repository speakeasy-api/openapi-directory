import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings:
    r"""UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings
    Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
    """
    
    flood_unknown_multicast_traffic_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodUnknownMulticastTrafficEnabled') }})
    igmp_snooping_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('igmpSnoopingEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides:
    flood_unknown_multicast_traffic_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodUnknownMulticastTrafficEnabled') }})
    igmp_snooping_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('igmpSnoopingEnabled') }})
    stacks: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stacks') }})
    switch_profiles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfiles') }})
    switches: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switches') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastRequestBody:
    default_settings: Optional[UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSettings') }})
    overrides: Optional[list[UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastRequest:
    path_params: UpdateNetworkSwitchRoutingMulticastPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchRoutingMulticastRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchRoutingMulticastResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_routing_multicast_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
