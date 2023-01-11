import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchAccessControlListsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchAccessControlListsRequest:
    path_params: GetNetworkSwitchAccessControlListsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchAccessControlListsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_access_control_lists_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
