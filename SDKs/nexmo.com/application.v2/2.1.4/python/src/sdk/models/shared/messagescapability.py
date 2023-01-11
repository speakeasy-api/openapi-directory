import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MessagesCapabilityWebhooksInboundURLHTTPMethodEnum(str, Enum):
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class MessagesCapabilityWebhooksInboundURL:
    r"""MessagesCapabilityWebhooksInboundURL
    Vonage will forward inbound messages to this URL
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[MessagesCapabilityWebhooksInboundURLHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    
class MessagesCapabilityWebhooksStatusURLHTTPMethodEnum(str, Enum):
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class MessagesCapabilityWebhooksStatusURL:
    r"""MessagesCapabilityWebhooksStatusURL
    Vonage will send message status updates (e.g. `delivered`, `seen`) to this URL
    """
    
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    http_method: Optional[MessagesCapabilityWebhooksStatusURLHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    

@dataclass_json
@dataclasses.dataclass
class MessagesCapabilityWebhooks:
    inbound_url: Optional[MessagesCapabilityWebhooksInboundURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_url') }})
    status_url: Optional[MessagesCapabilityWebhooksStatusURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_url') }})
    

@dataclass_json
@dataclasses.dataclass
class MessagesCapability:
    r"""MessagesCapability
    Messages / Dispatch related configuration
    """
    
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    webhooks: Optional[MessagesCapabilityWebhooks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
