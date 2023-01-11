import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1period as shared_googlecloudchannelv1period

class GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum(str, Enum):
    PAYMENT_PLAN_UNSPECIFIED = "PAYMENT_PLAN_UNSPECIFIED"
    COMMITMENT = "COMMITMENT"
    FLEXIBLE = "FLEXIBLE"
    FREE = "FREE"
    TRIAL = "TRIAL"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1RenewalSettingsInput:
    r"""GoogleCloudChannelV1RenewalSettingsInput
    Renewal settings for renewable Offers.
    """
    
    enable_renewal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableRenewal') }})
    payment_cycle: Optional[shared_googlecloudchannelv1period.GoogleCloudChannelV1Period] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCycle') }})
    payment_plan: Optional[GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentPlan') }})
    resize_unit_count: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resizeUnitCount') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1RenewalSettings:
    r"""GoogleCloudChannelV1RenewalSettings
    Renewal settings for renewable Offers.
    """
    
    enable_renewal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableRenewal') }})
    payment_cycle: Optional[shared_googlecloudchannelv1period.GoogleCloudChannelV1Period] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentCycle') }})
    payment_plan: Optional[GoogleCloudChannelV1RenewalSettingsPaymentPlanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentPlan') }})
    resize_unit_count: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resizeUnitCount') }})
    scheduled_renewal_offer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledRenewalOffer') }})
    
