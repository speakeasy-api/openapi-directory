import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlesecuritysafebrowsingv4threatmatch as shared_googlesecuritysafebrowsingv4threatmatch


@dataclass_json
@dataclasses.dataclass
class GoogleSecuritySafebrowsingV4FindFullHashesResponse:
    matches: Optional[list[shared_googlesecuritysafebrowsingv4threatmatch.GoogleSecuritySafebrowsingV4ThreatMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches') }})
    minimum_wait_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumWaitDuration') }})
    negative_cache_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeCacheDuration') }})
    
