import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativerequirements as shared_creativerequirements
from ..shared import deliverycontrol as shared_deliverycontrol
from ..shared import money as shared_money
from ..shared import preferreddealterms as shared_preferreddealterms
from ..shared import privateauctionterms as shared_privateauctionterms
from ..shared import programmaticguaranteedterms as shared_programmaticguaranteedterms
from ..shared import timezone as shared_timezone
from ..shared import marketplacetargeting as shared_marketplacetargeting
from ..shared import privateauctionterms as shared_privateauctionterms

class DealDealTypeEnum(str, Enum):
    DEAL_TYPE_UNSPECIFIED = "DEAL_TYPE_UNSPECIFIED"
    PREFERRED_DEAL = "PREFERRED_DEAL"
    PRIVATE_AUCTION = "PRIVATE_AUCTION"
    PROGRAMMATIC_GUARANTEED = "PROGRAMMATIC_GUARANTEED"


@dataclass_json
@dataclasses.dataclass
class Deal:
    r"""Deal
    A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
    """
    
    billed_buyer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    client: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creative_requirements: Optional[shared_creativerequirements.CreativeRequirements] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeRequirements') }})
    deal_type: Optional[DealDealTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealType') }})
    delivery_control: Optional[shared_deliverycontrol.DeliveryControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryControl') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    estimated_gross_spend: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    flight_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEndTime') }})
    flight_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStartTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferred_deal_terms: Optional[shared_preferreddealterms.PreferredDealTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredDealTerms') }})
    private_auction_terms: Optional[shared_privateauctionterms.PrivateAuctionTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAuctionTerms') }})
    programmatic_guaranteed_terms: Optional[shared_programmaticguaranteedterms.ProgrammaticGuaranteedTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticGuaranteedTerms') }})
    proposal_revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevision') }})
    publisher_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfile') }})
    seller_time_zone: Optional[shared_timezone.TimeZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerTimeZone') }})
    targeting: Optional[shared_marketplacetargeting.MarketplaceTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class DealInput:
    r"""DealInput
    A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
    """
    
    estimated_gross_spend: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    flight_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEndTime') }})
    flight_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStartTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferred_deal_terms: Optional[shared_preferreddealterms.PreferredDealTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredDealTerms') }})
    private_auction_terms: Optional[shared_privateauctionterms.PrivateAuctionTermsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAuctionTerms') }})
    programmatic_guaranteed_terms: Optional[shared_programmaticguaranteedterms.ProgrammaticGuaranteedTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticGuaranteedTerms') }})
    publisher_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfile') }})
    seller_time_zone: Optional[shared_timezone.TimeZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerTimeZone') }})
    targeting: Optional[shared_marketplacetargeting.MarketplaceTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    
