import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProjectRepoID:
    r"""ProjectRepoID
    Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
    """
    
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    repo_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoName') }})
    
