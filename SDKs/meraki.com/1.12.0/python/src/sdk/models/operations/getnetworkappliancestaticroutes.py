import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceStaticRoutesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceStaticRoutesRequest:
    path_params: GetNetworkApplianceStaticRoutesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceStaticRoutesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_static_routes_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
