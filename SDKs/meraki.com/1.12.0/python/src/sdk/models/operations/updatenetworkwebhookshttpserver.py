import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWebhooksHTTPServerRequestBody:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    shared_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class UpdateNetworkWebhooksHTTPServerRequest:
    path_params: UpdateNetworkWebhooksHTTPServerPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWebhooksHTTPServerRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWebhooksHTTPServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_webhooks_http_server_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
