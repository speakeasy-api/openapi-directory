import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import convertedotherregionsprice as shared_convertedotherregionsprice
from ..shared import convertedregionprice as shared_convertedregionprice


@dataclass_json
@dataclasses.dataclass
class ConvertRegionPricesResponse:
    r"""ConvertRegionPricesResponse
    Response message for ConvertRegionPrices.
    """
    
    converted_other_regions_price: Optional[shared_convertedotherregionsprice.ConvertedOtherRegionsPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertedOtherRegionsPrice') }})
    converted_region_prices: Optional[dict[str, shared_convertedregionprice.ConvertedRegionPrice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convertedRegionPrices') }})
    
