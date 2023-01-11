import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkGroupPolicyPathParams:
    group_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupPolicyId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkGroupPolicyRequest:
    path_params: GetNetworkGroupPolicyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkGroupPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_group_policy_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
