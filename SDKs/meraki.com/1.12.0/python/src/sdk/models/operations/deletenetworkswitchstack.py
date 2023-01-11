import dataclasses



@dataclasses.dataclass
class DeleteNetworkSwitchStackPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSwitchStackRequest:
    path_params: DeleteNetworkSwitchStackPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSwitchStackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
