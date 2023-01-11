import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import businesschainsearchterms as shared_businesschainsearchterms
from ..shared import georegionsearchterms as shared_georegionsearchterms
from ..shared import poisearchterms as shared_poisearchterms


@dataclass_json
@dataclasses.dataclass
class SearchTargetingOptionsRequest:
    r"""SearchTargetingOptionsRequest
    Request message for SearchTargetingOptions.
    """
    
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    business_chain_search_terms: Optional[shared_businesschainsearchterms.BusinessChainSearchTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainSearchTerms') }})
    geo_region_search_terms: Optional[shared_georegionsearchterms.GeoRegionSearchTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionSearchTerms') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    poi_search_terms: Optional[shared_poisearchterms.PoiSearchTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiSearchTerms') }})
    
