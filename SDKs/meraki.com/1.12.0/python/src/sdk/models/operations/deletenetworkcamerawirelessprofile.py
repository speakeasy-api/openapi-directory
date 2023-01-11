import dataclasses



@dataclasses.dataclass
class DeleteNetworkCameraWirelessProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    wireless_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'wirelessProfileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkCameraWirelessProfileRequest:
    path_params: DeleteNetworkCameraWirelessProfilePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkCameraWirelessProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
