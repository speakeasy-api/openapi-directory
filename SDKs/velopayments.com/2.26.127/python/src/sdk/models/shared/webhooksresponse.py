import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookresponse as shared_webhookresponse


@dataclass_json
@dataclasses.dataclass
class WebhooksResponse:
    r"""WebhooksResponse
    List Webhooks Object
    """
    
    content: Optional[list[shared_webhookresponse.WebhookResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
