import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkWebhooksWebhookTestPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkWebhooksWebhookTestRequestBody:
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    shared_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    

@dataclasses.dataclass
class CreateNetworkWebhooksWebhookTestRequest:
    path_params: CreateNetworkWebhooksWebhookTestPathParams = dataclasses.field()
    request: CreateNetworkWebhooksWebhookTestRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkWebhooksWebhookTestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_webhooks_webhook_test_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
