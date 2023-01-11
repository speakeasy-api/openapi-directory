import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import migrationjob as shared_migrationjob


@dataclass_json
@dataclasses.dataclass
class ListMigrationJobsResponse:
    r"""ListMigrationJobsResponse
    Response message for 'ListMigrationJobs' request.
    """
    
    migration_jobs: Optional[list[shared_migrationjob.MigrationJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migrationJobs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
