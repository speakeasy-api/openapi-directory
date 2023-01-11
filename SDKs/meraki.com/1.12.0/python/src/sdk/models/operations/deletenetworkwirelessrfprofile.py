import dataclasses



@dataclasses.dataclass
class DeleteNetworkWirelessRfProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rf_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rfProfileId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkWirelessRfProfileRequest:
    path_params: DeleteNetworkWirelessRfProfilePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkWirelessRfProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
