import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmUserSoftwaresPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmUserSoftwaresRequest:
    path_params: GetNetworkSmUserSoftwaresPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmUserSoftwaresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_user_softwares_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
