import dataclasses



@dataclasses.dataclass
class DeleteNetworkSwitchAccessPolicyPathParams:
    access_policy_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accessPolicyNumber', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSwitchAccessPolicyRequest:
    path_params: DeleteNetworkSwitchAccessPolicyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSwitchAccessPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
