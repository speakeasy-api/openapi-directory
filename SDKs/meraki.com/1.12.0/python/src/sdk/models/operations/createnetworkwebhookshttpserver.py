import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkWebhooksHTTPServerPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkWebhooksHTTPServerRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    shared_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    

@dataclasses.dataclass
class CreateNetworkWebhooksHTTPServerRequest:
    path_params: CreateNetworkWebhooksHTTPServerPathParams = dataclasses.field()
    request: CreateNetworkWebhooksHTTPServerRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkWebhooksHTTPServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_webhooks_http_server_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
