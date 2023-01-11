import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmProfilesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmProfilesRequest:
    path_params: GetNetworkSmProfilesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_profiles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
