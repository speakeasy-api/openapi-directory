import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ampissue as shared_ampissue

class AmpInspectionResultAmpIndexStatusVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"

class AmpInspectionResultIndexingStateEnum(str, Enum):
    AMP_INDEXING_STATE_UNSPECIFIED = "AMP_INDEXING_STATE_UNSPECIFIED"
    AMP_INDEXING_ALLOWED = "AMP_INDEXING_ALLOWED"
    BLOCKED_DUE_TO_NOINDEX = "BLOCKED_DUE_TO_NOINDEX"
    BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER = "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER"

class AmpInspectionResultPageFetchStateEnum(str, Enum):
    PAGE_FETCH_STATE_UNSPECIFIED = "PAGE_FETCH_STATE_UNSPECIFIED"
    SUCCESSFUL = "SUCCESSFUL"
    SOFT_404 = "SOFT_404"
    BLOCKED_ROBOTS_TXT = "BLOCKED_ROBOTS_TXT"
    NOT_FOUND = "NOT_FOUND"
    ACCESS_DENIED = "ACCESS_DENIED"
    SERVER_ERROR = "SERVER_ERROR"
    REDIRECT_ERROR = "REDIRECT_ERROR"
    ACCESS_FORBIDDEN = "ACCESS_FORBIDDEN"
    BLOCKED_4_XX = "BLOCKED_4XX"
    INTERNAL_CRAWL_ERROR = "INTERNAL_CRAWL_ERROR"
    INVALID_URL = "INVALID_URL"

class AmpInspectionResultRobotsTxtStateEnum(str, Enum):
    ROBOTS_TXT_STATE_UNSPECIFIED = "ROBOTS_TXT_STATE_UNSPECIFIED"
    ALLOWED = "ALLOWED"
    DISALLOWED = "DISALLOWED"

class AmpInspectionResultVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclasses.dataclass
class AmpInspectionResult:
    r"""AmpInspectionResult
    AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.
    """
    
    amp_index_status_verdict: Optional[AmpInspectionResultAmpIndexStatusVerdictEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ampIndexStatusVerdict') }})
    amp_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ampUrl') }})
    indexing_state: Optional[AmpInspectionResultIndexingStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexingState') }})
    issues: Optional[list[shared_ampissue.AmpIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    last_crawl_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCrawlTime') }})
    page_fetch_state: Optional[AmpInspectionResultPageFetchStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageFetchState') }})
    robots_txt_state: Optional[AmpInspectionResultRobotsTxtStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotsTxtState') }})
    verdict: Optional[AmpInspectionResultVerdictEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verdict') }})
    
