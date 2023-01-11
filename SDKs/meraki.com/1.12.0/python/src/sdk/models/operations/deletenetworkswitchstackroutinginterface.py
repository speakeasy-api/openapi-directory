import dataclasses



@dataclasses.dataclass
class DeleteNetworkSwitchStackRoutingInterfacePathParams:
    interface_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSwitchStackRoutingInterfaceRequest:
    path_params: DeleteNetworkSwitchStackRoutingInterfacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSwitchStackRoutingInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
