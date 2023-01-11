import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importjob as shared_importjob


@dataclass_json
@dataclasses.dataclass
class ListImportJobsResponse:
    r"""ListImportJobsResponse
    Response message for KeyManagementService.ListImportJobs.
    """
    
    import_jobs: Optional[list[shared_importjob.ImportJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importJobs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
