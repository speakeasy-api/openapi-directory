import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MessagesWebhooksEndpointTypeEnum(str, Enum):
    INBOUND_URL = "inbound_url"
    STATUS_URL = "status_url"

class MessagesWebhooksHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class MessagesWebhooks:
    endpoint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    endpoint_type: MessagesWebhooksEndpointTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint_type') }})
    http_method: MessagesWebhooksHTTPMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclasses.dataclass
class Messages:
    r"""Messages
    The Nexmo product that you access with this application.
    """
    
    webhooks: Optional[list[MessagesWebhooks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
