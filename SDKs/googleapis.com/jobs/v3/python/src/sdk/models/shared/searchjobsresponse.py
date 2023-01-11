import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import histogramresults as shared_histogramresults
from ..shared import location as shared_location
from ..shared import matchingjob as shared_matchingjob
from ..shared import responsemetadata as shared_responsemetadata
from ..shared import spellingcorrection as shared_spellingcorrection


@dataclass_json
@dataclasses.dataclass
class SearchJobsResponse:
    r"""SearchJobsResponse
    Output only. Response for SearchJob method.
    """
    
    broadened_query_jobs_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadenedQueryJobsCount') }})
    estimated_total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedTotalSize') }})
    histogram_results: Optional[shared_histogramresults.HistogramResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramResults') }})
    location_filters: Optional[list[shared_location.Location]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationFilters') }})
    matching_jobs: Optional[list[shared_matchingjob.MatchingJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingJobs') }})
    metadata: Optional[shared_responsemetadata.ResponseMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    spell_correction: Optional[shared_spellingcorrection.SpellingCorrection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spellCorrection') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
