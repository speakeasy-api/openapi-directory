import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudreposourcecontext as shared_cloudreposourcecontext
from ..shared import gerritsourcecontext as shared_gerritsourcecontext
from ..shared import gitsourcecontext as shared_gitsourcecontext


@dataclass_json
@dataclasses.dataclass
class SourceContext:
    r"""SourceContext
    A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
    """
    
    cloud_repo: Optional[shared_cloudreposourcecontext.CloudRepoSourceContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRepo') }})
    gerrit: Optional[shared_gerritsourcecontext.GerritSourceContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gerrit') }})
    git: Optional[shared_gitsourcecontext.GitSourceContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
