import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usage as shared_usage
from ..shared import cachefillregions as shared_cachefillregions

class CloudCdnWorkloadCacheFillOriginServiceEnum(str, Enum):
    CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED = "CACHE_FILL_ORIGIN_SERVICE_UNSPECIFIED"
    CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET = "CACHE_FILL_ORIGIN_SERVICE_GOOGLE_CLOUD_STORAGE_BUCKET"
    CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE = "CACHE_FILL_ORIGIN_SERVICE_BACKEND_SERVICE"


@dataclass_json
@dataclasses.dataclass
class CloudCdnWorkload:
    r"""CloudCdnWorkload
    Specifies usage for Cloud CDN resources.
    """
    
    cache_fill_origin_service: Optional[CloudCdnWorkloadCacheFillOriginServiceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheFillOriginService') }})
    cache_fill_rate: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheFillRate') }})
    cache_fill_regions: Optional[shared_cachefillregions.CacheFillRegions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheFillRegions') }})
    cache_look_up_rate: Optional[shared_usage.Usage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheLookUpRate') }})
    
