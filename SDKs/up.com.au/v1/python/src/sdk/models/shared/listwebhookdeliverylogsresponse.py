import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookdeliverylogresource as shared_webhookdeliverylogresource


@dataclass_json
@dataclasses.dataclass
class ListWebhookDeliveryLogsResponseLinks:
    next: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWebhookDeliveryLogsResponse:
    r"""ListWebhookDeliveryLogsResponse
    Successful response to get all delivery logs for a webhook. This returns
    a paginated list of delivery logs, which can be scrolled by following the
    `next` and `prev` links if present.
    
    """
    
    data: list[shared_webhookdeliverylogresource.WebhookDeliveryLogResource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListWebhookDeliveryLogsResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
