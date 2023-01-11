import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publicsubscriptionstatus as shared_publicsubscriptionstatus


@dataclass_json
@dataclasses.dataclass
class PublicSubscriptionStatusesResponse:
    r"""PublicSubscriptionStatusesResponse
    A collection of subscription statuses for a contact.
    """
    
    recipient: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    subscription_statuses: list[shared_publicsubscriptionstatus.PublicSubscriptionStatus] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionStatuses') }})
    
