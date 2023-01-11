import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1extension as shared_googlecloudpaymentsresellersubscriptionv1extension


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest:
    r"""GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest
    Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.
    """
    
    extension: Optional[shared_googlecloudpaymentsresellersubscriptionv1extension.GoogleCloudPaymentsResellerSubscriptionV1Extension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
