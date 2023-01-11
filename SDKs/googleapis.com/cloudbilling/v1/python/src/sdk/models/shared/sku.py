import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category as shared_category
from ..shared import geotaxonomy as shared_geotaxonomy
from ..shared import pricinginfo as shared_pricinginfo


@dataclass_json
@dataclasses.dataclass
class Sku:
    r"""Sku
    Encapsulates a single SKU in Google Cloud Platform
    """
    
    category: Optional[shared_category.Category] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    geo_taxonomy: Optional[shared_geotaxonomy.GeoTaxonomy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTaxonomy') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pricing_info: Optional[list[shared_pricinginfo.PricingInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingInfo') }})
    service_provider_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceProviderName') }})
    service_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRegions') }})
    sku_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuId') }})
    
