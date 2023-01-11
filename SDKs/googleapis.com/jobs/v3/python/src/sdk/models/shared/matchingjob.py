import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commuteinfo as shared_commuteinfo
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class MatchingJob:
    r"""MatchingJob
    Output only. Job entry with metadata inside SearchJobsResponse.
    """
    
    commute_info: Optional[shared_commuteinfo.CommuteInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commuteInfo') }})
    job: Optional[shared_job.Job] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    job_summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobSummary') }})
    job_title_snippet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTitleSnippet') }})
    search_text_snippet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchTextSnippet') }})
    
