import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkGroupPoliciesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkGroupPoliciesRequest:
    path_params: GetNetworkGroupPoliciesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkGroupPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_group_policies_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
