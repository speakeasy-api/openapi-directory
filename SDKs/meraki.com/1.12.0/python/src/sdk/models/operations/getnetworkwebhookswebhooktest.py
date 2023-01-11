import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWebhooksWebhookTestPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    webhook_test_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhookTestId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWebhooksWebhookTestRequest:
    path_params: GetNetworkWebhooksWebhookTestPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWebhooksWebhookTestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_webhooks_webhook_test_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
