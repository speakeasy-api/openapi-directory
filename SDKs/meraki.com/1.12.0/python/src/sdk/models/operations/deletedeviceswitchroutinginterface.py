import dataclasses



@dataclasses.dataclass
class DeleteDeviceSwitchRoutingInterfacePathParams:
    interface_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeviceSwitchRoutingInterfaceRequest:
    path_params: DeleteDeviceSwitchRoutingInterfacePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDeviceSwitchRoutingInterfaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
