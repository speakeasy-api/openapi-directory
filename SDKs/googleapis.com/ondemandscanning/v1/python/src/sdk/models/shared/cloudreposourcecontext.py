import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aliascontext as shared_aliascontext
from ..shared import repoid as shared_repoid


@dataclass_json
@dataclasses.dataclass
class CloudRepoSourceContext:
    r"""CloudRepoSourceContext
    A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
    """
    
    alias_context: Optional[shared_aliascontext.AliasContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliasContext') }})
    repo_id: Optional[shared_repoid.RepoID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoId') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
