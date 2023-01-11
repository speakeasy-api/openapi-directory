import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchAccessPoliciesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchAccessPoliciesRequest:
    path_params: GetNetworkSwitchAccessPoliciesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchAccessPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_access_policies_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
