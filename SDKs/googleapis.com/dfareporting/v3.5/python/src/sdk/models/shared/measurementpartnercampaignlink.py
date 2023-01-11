import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MeasurementPartnerCampaignLinkLinkStatusEnum(str, Enum):
    MEASUREMENT_PARTNER_UNLINKED = "MEASUREMENT_PARTNER_UNLINKED"
    MEASUREMENT_PARTNER_LINKED = "MEASUREMENT_PARTNER_LINKED"
    MEASUREMENT_PARTNER_LINK_PENDING = "MEASUREMENT_PARTNER_LINK_PENDING"
    MEASUREMENT_PARTNER_LINK_FAILURE = "MEASUREMENT_PARTNER_LINK_FAILURE"
    MEASUREMENT_PARTNER_LINK_OPT_OUT = "MEASUREMENT_PARTNER_LINK_OPT_OUT"
    MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING"
    MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING"
    MEASUREMENT_PARTNER_MODE_CHANGE_PENDING = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING"

class MeasurementPartnerCampaignLinkMeasurementPartnerEnum(str, Enum):
    NONE = "NONE"
    INTEGRAL_AD_SCIENCE = "INTEGRAL_AD_SCIENCE"
    DOUBLE_VERIFY = "DOUBLE_VERIFY"


@dataclass_json
@dataclasses.dataclass
class MeasurementPartnerCampaignLink:
    link_status: Optional[MeasurementPartnerCampaignLinkLinkStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkStatus') }})
    measurement_partner: Optional[MeasurementPartnerCampaignLinkMeasurementPartnerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementPartner') }})
    partner_campaign_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerCampaignId') }})
    
