import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookeventresource as shared_webhookeventresource


@dataclass_json
@dataclasses.dataclass
class WebhookEventCallback:
    r"""WebhookEventCallback
    Asynchronous callback request used for webhook event delivery.
    
    """
    
    data: shared_webhookeventresource.WebhookEventResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
