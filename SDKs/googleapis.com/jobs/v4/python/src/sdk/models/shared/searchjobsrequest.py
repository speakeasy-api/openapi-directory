import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customrankinginfo as shared_customrankinginfo
from ..shared import histogramquery as shared_histogramquery
from ..shared import jobquery as shared_jobquery
from ..shared import requestmetadata as shared_requestmetadata

class SearchJobsRequestDiversificationLevelEnum(str, Enum):
    DIVERSIFICATION_LEVEL_UNSPECIFIED = "DIVERSIFICATION_LEVEL_UNSPECIFIED"
    DISABLED = "DISABLED"
    SIMPLE = "SIMPLE"
    ONE_PER_COMPANY = "ONE_PER_COMPANY"
    TWO_PER_COMPANY = "TWO_PER_COMPANY"
    DIVERSIFY_BY_LOOSER_SIMILARITY = "DIVERSIFY_BY_LOOSER_SIMILARITY"

class SearchJobsRequestJobViewEnum(str, Enum):
    JOB_VIEW_UNSPECIFIED = "JOB_VIEW_UNSPECIFIED"
    JOB_VIEW_ID_ONLY = "JOB_VIEW_ID_ONLY"
    JOB_VIEW_MINIMAL = "JOB_VIEW_MINIMAL"
    JOB_VIEW_SMALL = "JOB_VIEW_SMALL"
    JOB_VIEW_FULL = "JOB_VIEW_FULL"

class SearchJobsRequestKeywordMatchModeEnum(str, Enum):
    KEYWORD_MATCH_MODE_UNSPECIFIED = "KEYWORD_MATCH_MODE_UNSPECIFIED"
    KEYWORD_MATCH_DISABLED = "KEYWORD_MATCH_DISABLED"
    KEYWORD_MATCH_ALL = "KEYWORD_MATCH_ALL"
    KEYWORD_MATCH_TITLE_ONLY = "KEYWORD_MATCH_TITLE_ONLY"

class SearchJobsRequestSearchModeEnum(str, Enum):
    SEARCH_MODE_UNSPECIFIED = "SEARCH_MODE_UNSPECIFIED"
    JOB_SEARCH = "JOB_SEARCH"
    FEATURED_JOB_SEARCH = "FEATURED_JOB_SEARCH"


@dataclass_json
@dataclasses.dataclass
class SearchJobsRequest:
    r"""SearchJobsRequest
    The Request body of the `SearchJobs` call.
    """
    
    custom_ranking_info: Optional[shared_customrankinginfo.CustomRankingInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRankingInfo') }})
    disable_keyword_match: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableKeywordMatch') }})
    diversification_level: Optional[SearchJobsRequestDiversificationLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diversificationLevel') }})
    enable_broadening: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBroadening') }})
    histogram_queries: Optional[list[shared_histogramquery.HistogramQuery]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramQueries') }})
    job_query: Optional[shared_jobquery.JobQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQuery') }})
    job_view: Optional[SearchJobsRequestJobViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobView') }})
    keyword_match_mode: Optional[SearchJobsRequestKeywordMatchModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordMatchMode') }})
    max_page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPageSize') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    request_metadata: Optional[shared_requestmetadata.RequestMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMetadata') }})
    search_mode: Optional[SearchJobsRequestSearchModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchMode') }})
    
