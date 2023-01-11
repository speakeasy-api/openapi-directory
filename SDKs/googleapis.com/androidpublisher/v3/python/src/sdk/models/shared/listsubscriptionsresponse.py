import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscription as shared_subscription


@dataclass_json
@dataclasses.dataclass
class ListSubscriptionsResponse:
    r"""ListSubscriptionsResponse
    Response message for ListSubscriptions.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    subscriptions: Optional[list[shared_subscription.Subscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions') }})
    
