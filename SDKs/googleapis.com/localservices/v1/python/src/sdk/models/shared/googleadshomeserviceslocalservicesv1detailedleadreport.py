import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleadshomeserviceslocalservicesv1aggregatorinfo as shared_googleadshomeserviceslocalservicesv1aggregatorinfo
from ..shared import googleadshomeserviceslocalservicesv1bookinglead as shared_googleadshomeserviceslocalservicesv1bookinglead
from ..shared import googleadshomeserviceslocalservicesv1messagelead as shared_googleadshomeserviceslocalservicesv1messagelead
from ..shared import googleadshomeserviceslocalservicesv1phonelead as shared_googleadshomeserviceslocalservicesv1phonelead
from ..shared import googletypetimezone as shared_googletypetimezone

class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum(str, Enum):
    CHARGE_STATUS_UNSPECIFIED = "CHARGE_STATUS_UNSPECIFIED"
    CHARGED = "CHARGED"
    NOT_CHARGED = "NOT_CHARGED"

class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum(str, Enum):
    LEAD_TYPE_UNSPECIFIED = "LEAD_TYPE_UNSPECIFIED"
    MESSAGE = "MESSAGE"
    PHONE_CALL = "PHONE_CALL"
    BOOKING = "BOOKING"


@dataclass_json
@dataclasses.dataclass
class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport:
    r"""GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
    A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    aggregator_info: Optional[shared_googleadshomeserviceslocalservicesv1aggregatorinfo.GoogleAdsHomeservicesLocalservicesV1AggregatorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregatorInfo') }})
    booking_lead: Optional[shared_googleadshomeserviceslocalservicesv1bookinglead.GoogleAdsHomeservicesLocalservicesV1BookingLead] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingLead') }})
    business_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessName') }})
    charge_status: Optional[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeStatus') }})
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    dispute_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disputeStatus') }})
    geo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo') }})
    lead_category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadCategory') }})
    lead_creation_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadCreationTimestamp') }})
    lead_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadId') }})
    lead_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadPrice') }})
    lead_type: Optional[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadType') }})
    message_lead: Optional[shared_googleadshomeserviceslocalservicesv1messagelead.GoogleAdsHomeservicesLocalservicesV1MessageLead] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageLead') }})
    phone_lead: Optional[shared_googleadshomeserviceslocalservicesv1phonelead.GoogleAdsHomeservicesLocalservicesV1PhoneLead] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneLead') }})
    timezone: Optional[shared_googletypetimezone.GoogleTypeTimeZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
