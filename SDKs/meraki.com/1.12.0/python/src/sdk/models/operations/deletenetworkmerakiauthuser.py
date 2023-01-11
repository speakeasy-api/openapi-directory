import dataclasses



@dataclasses.dataclass
class DeleteNetworkMerakiAuthUserPathParams:
    meraki_auth_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'merakiAuthUserId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkMerakiAuthUserRequest:
    path_params: DeleteNetworkMerakiAuthUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkMerakiAuthUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
