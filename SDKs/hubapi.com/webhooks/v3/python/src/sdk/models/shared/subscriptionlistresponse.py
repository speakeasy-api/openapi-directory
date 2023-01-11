import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionresponse as shared_subscriptionresponse


@dataclass_json
@dataclasses.dataclass
class SubscriptionListResponse:
    r"""SubscriptionListResponse
    List of event subscriptions for your app
    """
    
    results: list[shared_subscriptionresponse.SubscriptionResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
