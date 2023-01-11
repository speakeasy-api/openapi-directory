import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import occurrence as shared_occurrence


@dataclass_json
@dataclasses.dataclass
class ListVulnerabilitiesResponseV1:
    r"""ListVulnerabilitiesResponseV1
    ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    occurrences: Optional[list[shared_occurrence.Occurrence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    
