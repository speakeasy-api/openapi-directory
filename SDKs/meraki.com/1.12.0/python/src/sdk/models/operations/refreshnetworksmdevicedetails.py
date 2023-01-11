import dataclasses



@dataclasses.dataclass
class RefreshNetworkSmDeviceDetailsPathParams:
    device_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RefreshNetworkSmDeviceDetailsRequest:
    path_params: RefreshNetworkSmDeviceDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RefreshNetworkSmDeviceDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
