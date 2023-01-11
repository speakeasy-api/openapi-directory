import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceSecurityIntrusionPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceSecurityIntrusionRequest:
    path_params: GetNetworkApplianceSecurityIntrusionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceSecurityIntrusionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
