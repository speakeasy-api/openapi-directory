import dataclasses



@dataclasses.dataclass
class DeleteNetworkGroupPolicyPathParams:
    group_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupPolicyId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkGroupPolicyRequest:
    path_params: DeleteNetworkGroupPolicyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkGroupPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
