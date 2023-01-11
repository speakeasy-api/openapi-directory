import dataclasses
from typing import Any
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhook_event_enum as shared_webhook_event_enum


@dataclass_json
@dataclasses.dataclass
class CreateWebhookRequestBody:
    r"""CreateWebhookRequestBody
    A create webhook request body
    """
    
    event: shared_webhook_event_enum.WebhookEventEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    url: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
