import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1serviceperiod as shared_googlecloudpaymentsresellersubscriptionv1serviceperiod


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails:
    r"""GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails
    Details for a ONE_TIME recurrence line item.
    """
    
    service_period: Optional[shared_googlecloudpaymentsresellersubscriptionv1serviceperiod.GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePeriod') }})
    
