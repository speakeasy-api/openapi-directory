import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SandboxBankTransferFireWebhookResponse:
    r"""SandboxBankTransferFireWebhookResponse
    SandboxBankTransferFireWebhookResponse defines the response schema for `/sandbox/bank_transfer/fire_webhook`
    """
    
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    
