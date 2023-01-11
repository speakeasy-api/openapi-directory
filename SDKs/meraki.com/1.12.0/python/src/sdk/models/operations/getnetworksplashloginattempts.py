import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSplashLoginAttemptsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSplashLoginAttemptsQueryParams:
    login_identifier: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'loginIdentifier', 'style': 'form', 'explode': True }})
    ssid_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ssidNumber', 'style': 'form', 'explode': True }})
    timespan: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkSplashLoginAttemptsRequest:
    path_params: GetNetworkSplashLoginAttemptsPathParams = dataclasses.field()
    query_params: GetNetworkSplashLoginAttemptsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSplashLoginAttemptsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_splash_login_attempts_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
