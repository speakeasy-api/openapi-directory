import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkMerakiAuthUsersPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkMerakiAuthUsersRequest:
    path_params: GetNetworkMerakiAuthUsersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkMerakiAuthUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_meraki_auth_users_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
