import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook_event_enum as shared_webhook_event_enum


@dataclass_json
@dataclasses.dataclass
class Webhook:
    r"""Webhook
    A webhook
    """
    
    event: Optional[shared_webhook_event_enum.WebhookEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    url: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    webhook_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook_id') }})
    
