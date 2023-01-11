import dataclasses



@dataclasses.dataclass
class DeleteNetworkSmUserAccessDevicePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    user_access_device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userAccessDeviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSmUserAccessDeviceRequest:
    path_params: DeleteNetworkSmUserAccessDevicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSmUserAccessDeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
