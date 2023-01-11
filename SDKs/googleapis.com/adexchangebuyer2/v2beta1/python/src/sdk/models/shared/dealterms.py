import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price
from ..shared import guaranteedfixedpriceterms as shared_guaranteedfixedpriceterms
from ..shared import nonguaranteedauctionterms as shared_nonguaranteedauctionterms
from ..shared import nonguaranteedfixedpriceterms as shared_nonguaranteedfixedpriceterms

class DealTermsBrandingTypeEnum(str, Enum):
    BRANDING_TYPE_UNSPECIFIED = "BRANDING_TYPE_UNSPECIFIED"
    BRANDED = "BRANDED"
    SEMI_TRANSPARENT = "SEMI_TRANSPARENT"


@dataclass_json
@dataclasses.dataclass
class DealTerms:
    r"""DealTerms
    The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
    """
    
    branding_type: Optional[DealTermsBrandingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    estimated_gross_spend: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    estimated_impressions_per_day: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedImpressionsPerDay') }})
    guaranteed_fixed_price_terms: Optional[shared_guaranteedfixedpriceterms.GuaranteedFixedPriceTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedFixedPriceTerms') }})
    non_guaranteed_auction_terms: Optional[shared_nonguaranteedauctionterms.NonGuaranteedAuctionTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonGuaranteedAuctionTerms') }})
    non_guaranteed_fixed_price_terms: Optional[shared_nonguaranteedfixedpriceterms.NonGuaranteedFixedPriceTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonGuaranteedFixedPriceTerms') }})
    seller_time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerTimeZone') }})
    
