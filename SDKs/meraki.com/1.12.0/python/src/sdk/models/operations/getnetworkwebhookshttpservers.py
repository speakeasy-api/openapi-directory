import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWebhooksHTTPServersPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWebhooksHTTPServersRequest:
    path_params: GetNetworkWebhooksHTTPServersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWebhooksHTTPServersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_webhooks_http_servers_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
