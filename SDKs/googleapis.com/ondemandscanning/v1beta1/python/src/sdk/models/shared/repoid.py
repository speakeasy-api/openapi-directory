import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectrepoid as shared_projectrepoid


@dataclass_json
@dataclasses.dataclass
class RepoID:
    r"""RepoID
    A unique identifier for a Cloud Repo.
    """
    
    project_repo_id: Optional[shared_projectrepoid.ProjectRepoID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectRepoId') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    
