import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubscriptionPurchasesAcknowledgeRequest:
    r"""SubscriptionPurchasesAcknowledgeRequest
    Request for the purchases.subscriptions.acknowledge API.
    """
    
    developer_payload: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerPayload') }})
    
