import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookresource as shared_webhookresource


@dataclass_json
@dataclasses.dataclass
class GetWebhookResponse:
    r"""GetWebhookResponse
    Successful response to get a single webhook.
    
    """
    
    data: shared_webhookresource.WebhookResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
