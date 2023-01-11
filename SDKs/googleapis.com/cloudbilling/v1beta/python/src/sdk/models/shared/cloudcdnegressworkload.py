import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage

class CloudCdnEgressWorkloadCacheEgressDestinationEnum(str, Enum):
    CACHE_EGRESS_DESTINATION_UNSPECIFIED = "CACHE_EGRESS_DESTINATION_UNSPECIFIED"
    CACHE_EGRESS_DESTINATION_ASIA_PACIFIC = "CACHE_EGRESS_DESTINATION_ASIA_PACIFIC"
    CACHE_EGRESS_DESTINATION_CHINA = "CACHE_EGRESS_DESTINATION_CHINA"
    CACHE_EGRESS_DESTINATION_EUROPE = "CACHE_EGRESS_DESTINATION_EUROPE"
    CACHE_EGRESS_DESTINATION_NORTH_AMERICA = "CACHE_EGRESS_DESTINATION_NORTH_AMERICA"
    CACHE_EGRESS_DESTINATION_OCEANIA = "CACHE_EGRESS_DESTINATION_OCEANIA"
    CACHE_EGRESS_DESTINATION_LATIN_AMERICA = "CACHE_EGRESS_DESTINATION_LATIN_AMERICA"
    CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS = "CACHE_EGRESS_DESTINATION_OTHER_DESTINATIONS"


@dataclass_json
@dataclasses.dataclass
class CloudCdnEgressWorkload:
    r"""CloudCdnEgressWorkload
    Specifies usage for Cloud CDN egress.
    """
    
    cache_egress_destination: Optional[CloudCdnEgressWorkloadCacheEgressDestinationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheEgressDestination') }})
    cache_egress_rate: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheEgressRate') }})
    
