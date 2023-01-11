import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1period as shared_googlecloudchannelv1period

class GoogleCloudChannelV1PlanPaymentPlanEnum(str, Enum):
    PAYMENT_PLAN_UNSPECIFIED = "PAYMENT_PLAN_UNSPECIFIED"
    COMMITMENT = "COMMITMENT"
    FLEXIBLE = "FLEXIBLE"
    FREE = "FREE"
    TRIAL = "TRIAL"
    OFFLINE = "OFFLINE"

class GoogleCloudChannelV1PlanPaymentTypeEnum(str, Enum):
    PAYMENT_TYPE_UNSPECIFIED = "PAYMENT_TYPE_UNSPECIFIED"
    PREPAY = "PREPAY"
    POSTPAY = "POSTPAY"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Plan:
    r"""GoogleCloudChannelV1Plan
    The payment plan for the Offer. Describes how to make a payment.
    """
    
    billing_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingAccount') }})
    payment_cycle: Optional[shared_googlecloudchannelv1period.GoogleCloudChannelV1Period] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCycle') }})
    payment_plan: Optional[GoogleCloudChannelV1PlanPaymentPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentPlan') }})
    payment_type: Optional[GoogleCloudChannelV1PlanPaymentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentType') }})
    trial_period: Optional[shared_googlecloudchannelv1period.GoogleCloudChannelV1Period] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriod') }})
    
