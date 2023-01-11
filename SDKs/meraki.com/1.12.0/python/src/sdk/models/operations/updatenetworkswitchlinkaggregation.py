import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchLinkAggregationPathParams:
    link_aggregation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'linkAggregationId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts:
    port_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portId') }})
    serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts:
    port_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portId') }})
    profile: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchLinkAggregationRequestBody:
    switch_ports: Optional[list[UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchPorts') }})
    switch_profile_ports: Optional[list[UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfilePorts') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchLinkAggregationRequest:
    path_params: UpdateNetworkSwitchLinkAggregationPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchLinkAggregationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchLinkAggregationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_link_aggregation_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
