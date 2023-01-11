import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CacheFillRegionsDestinationRegionEnum(str, Enum):
    CACHE_FILL_DESTINATION_REGION_UNSPECIFIED = "CACHE_FILL_DESTINATION_REGION_UNSPECIFIED"
    CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC = "CACHE_FILL_DESTINATION_REGION_ASIA_PACIFIC"
    CACHE_FILL_DESTINATION_REGION_EUROPE = "CACHE_FILL_DESTINATION_REGION_EUROPE"
    CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA = "CACHE_FILL_DESTINATION_REGION_NORTH_AMERICA"
    CACHE_FILL_DESTINATION_REGION_OCEANIA = "CACHE_FILL_DESTINATION_REGION_OCEANIA"
    CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA = "CACHE_FILL_DESTINATION_REGION_SOUTH_AMERICA"
    CACHE_FILL_DESTINATION_REGION_CHINA = "CACHE_FILL_DESTINATION_REGION_CHINA"
    CACHE_FILL_DESTINATION_REGION_OTHERS = "CACHE_FILL_DESTINATION_REGION_OTHERS"

class CacheFillRegionsSourceRegionEnum(str, Enum):
    CACHE_FILL_SOURCE_REGION_UNSPECIFIED = "CACHE_FILL_SOURCE_REGION_UNSPECIFIED"
    CACHE_FILL_REGION_ASIA_PACIFIC = "CACHE_FILL_REGION_ASIA_PACIFIC"
    CACHE_FILL_SOURCE_REGION_EUROPE = "CACHE_FILL_SOURCE_REGION_EUROPE"
    CACHE_FILL_SOURCE_REGION_NORTH_AMERICA = "CACHE_FILL_SOURCE_REGION_NORTH_AMERICA"
    CACHE_FILL_SOURCE_REGION_OCEANIA = "CACHE_FILL_SOURCE_REGION_OCEANIA"
    CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA = "CACHE_FILL_SOURCE_REGION_SOUTH_AMERICA"


@dataclass_json
@dataclasses.dataclass
class CacheFillRegions:
    r"""CacheFillRegions
    Specifies the regions for Cache Fill.
    """
    
    destination_region: Optional[CacheFillRegionsDestinationRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationRegion') }})
    source_region: Optional[CacheFillRegionsSourceRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRegion') }})
    
