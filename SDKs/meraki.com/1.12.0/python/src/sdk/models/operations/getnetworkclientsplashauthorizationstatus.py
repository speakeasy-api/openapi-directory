import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkClientSplashAuthorizationStatusPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkClientSplashAuthorizationStatusRequest:
    path_params: GetNetworkClientSplashAuthorizationStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkClientSplashAuthorizationStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_client_splash_authorization_status_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
