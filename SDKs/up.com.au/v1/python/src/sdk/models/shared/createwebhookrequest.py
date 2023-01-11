import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webhookinputresource as shared_webhookinputresource


@dataclass_json
@dataclasses.dataclass
class CreateWebhookRequest:
    r"""CreateWebhookRequest
    Request to create a new webhook. This currently only requires a `url`
    attribute.
    
    """
    
    data: shared_webhookinputresource.WebhookInputResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
