import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkAppliancePortsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkAppliancePortsRequest:
    path_params: GetNetworkAppliancePortsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkAppliancePortsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_ports_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
