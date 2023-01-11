import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price
from ..shared import dealtermsguaranteedfixedpriceterms as shared_dealtermsguaranteedfixedpriceterms
from ..shared import dealtermsnonguaranteedauctionterms as shared_dealtermsnonguaranteedauctionterms
from ..shared import dealtermsnonguaranteedfixedpriceterms as shared_dealtermsnonguaranteedfixedpriceterms
from ..shared import dealtermsrubiconnonguaranteedterms as shared_dealtermsrubiconnonguaranteedterms


@dataclass_json
@dataclasses.dataclass
class DealTerms:
    branding_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingType') }})
    cross_listed_external_deal_id_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossListedExternalDealIdType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    estimated_gross_spend: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    estimated_impressions_per_day: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedImpressionsPerDay') }})
    guaranteed_fixed_price_terms: Optional[shared_dealtermsguaranteedfixedpriceterms.DealTermsGuaranteedFixedPriceTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedFixedPriceTerms') }})
    non_guaranteed_auction_terms: Optional[shared_dealtermsnonguaranteedauctionterms.DealTermsNonGuaranteedAuctionTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonGuaranteedAuctionTerms') }})
    non_guaranteed_fixed_price_terms: Optional[shared_dealtermsnonguaranteedfixedpriceterms.DealTermsNonGuaranteedFixedPriceTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonGuaranteedFixedPriceTerms') }})
    rubicon_non_guaranteed_terms: Optional[shared_dealtermsrubiconnonguaranteedterms.DealTermsRubiconNonGuaranteedTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rubiconNonGuaranteedTerms') }})
    seller_time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerTimeZone') }})
    
