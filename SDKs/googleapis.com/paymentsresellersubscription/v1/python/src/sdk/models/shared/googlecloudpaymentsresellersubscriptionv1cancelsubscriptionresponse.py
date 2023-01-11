import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1subscription as shared_googlecloudpaymentsresellersubscriptionv1subscription


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse:
    subscription: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscription.GoogleCloudPaymentsResellerSubscriptionV1Subscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
