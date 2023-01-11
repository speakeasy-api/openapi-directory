import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkMerakiAuthUserPathParams:
    meraki_auth_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'merakiAuthUserId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkMerakiAuthUserRequest:
    path_params: GetNetworkMerakiAuthUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkMerakiAuthUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_meraki_auth_user_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
