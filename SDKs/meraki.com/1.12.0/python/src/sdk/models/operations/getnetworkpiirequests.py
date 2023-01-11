import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkPiiRequestsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkPiiRequestsRequest:
    path_params: GetNetworkPiiRequestsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkPiiRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_pii_requests_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
