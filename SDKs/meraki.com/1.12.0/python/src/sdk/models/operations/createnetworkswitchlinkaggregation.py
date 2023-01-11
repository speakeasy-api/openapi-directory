import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSwitchLinkAggregationPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts:
    port_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portId') }})
    serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts:
    port_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portId') }})
    profile: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchLinkAggregationRequestBody:
    switch_ports: Optional[list[CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchPorts') }})
    switch_profile_ports: Optional[list[CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfilePorts') }})
    

@dataclasses.dataclass
class CreateNetworkSwitchLinkAggregationRequest:
    path_params: CreateNetworkSwitchLinkAggregationPathParams = dataclasses.field()
    request: Optional[CreateNetworkSwitchLinkAggregationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSwitchLinkAggregationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_switch_link_aggregation_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
