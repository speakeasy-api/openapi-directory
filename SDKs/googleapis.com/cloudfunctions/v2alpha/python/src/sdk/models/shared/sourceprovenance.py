import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reposource as shared_reposource
from ..shared import storagesource as shared_storagesource


@dataclass_json
@dataclasses.dataclass
class SourceProvenance:
    r"""SourceProvenance
    Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
    """
    
    resolved_repo_source: Optional[shared_reposource.RepoSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedRepoSource') }})
    resolved_storage_source: Optional[shared_storagesource.StorageSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedStorageSource') }})
    
