import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpaymentsresellersubscriptionv1subscription as shared_googlecloudpaymentsresellersubscriptionv1subscription


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse:
    r"""GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse
    Response that contains the updated subscription resource.
    """
    
    subscription: Optional[shared_googlecloudpaymentsresellersubscriptionv1subscription.GoogleCloudPaymentsResellerSubscriptionV1Subscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
