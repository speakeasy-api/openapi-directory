import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WebhookEventTypesEnum(str, Enum):
    MESSAGE_RECEIVED = "message-received"
    MESSAGE_STATUS = "message-status"
    MESSAGE_SENT = "message-sent"
    CONVERSATION_CLOSED = "conversation-closed"
    CONTACT_CREATED = "contact-created"
    CONTACT_UPDATED = "contact-updated"
    CONTACT_REMOVED = "contact-removed"


@dataclass_json
@dataclasses.dataclass
class Webhook:
    event_types: Optional[list[WebhookEventTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypes') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
