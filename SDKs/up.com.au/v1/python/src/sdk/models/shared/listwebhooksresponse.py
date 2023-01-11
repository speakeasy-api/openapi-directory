import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookresource as shared_webhookresource


@dataclass_json
@dataclasses.dataclass
class ListWebhooksResponseLinks:
    next: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWebhooksResponse:
    r"""ListWebhooksResponse
    Successful response to get all webhooks. This returns a paginated list of
    webhooks, which can be scrolled by following the `prev` and `next` links
    if present.
    
    """
    
    data: list[shared_webhookresource.WebhookResource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListWebhooksResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
