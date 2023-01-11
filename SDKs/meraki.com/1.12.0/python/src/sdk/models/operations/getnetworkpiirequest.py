import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkPiiRequestPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    request_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkPiiRequestRequest:
    path_params: GetNetworkPiiRequestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkPiiRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_pii_request_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
