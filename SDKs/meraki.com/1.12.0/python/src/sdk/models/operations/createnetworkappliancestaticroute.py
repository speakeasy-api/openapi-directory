import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkApplianceStaticRoutePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkApplianceStaticRouteRequestBody:
    gateway_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayIp') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    subnet: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclasses.dataclass
class CreateNetworkApplianceStaticRouteRequest:
    path_params: CreateNetworkApplianceStaticRoutePathParams = dataclasses.field()
    request: CreateNetworkApplianceStaticRouteRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkApplianceStaticRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_appliance_static_route_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
