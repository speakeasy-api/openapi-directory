import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWebhooksHTTPServerRequest:
    path_params: GetNetworkWebhooksHTTPServerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWebhooksHTTPServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_webhooks_http_server_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
