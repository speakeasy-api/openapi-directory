import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GeoRegionSearchTerms:
    r"""GeoRegionSearchTerms
    Search terms for geo region targeting options.
    """
    
    geo_region_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionQuery') }})
    
