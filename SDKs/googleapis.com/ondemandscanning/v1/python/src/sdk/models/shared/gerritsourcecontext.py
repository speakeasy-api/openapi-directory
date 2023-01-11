import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aliascontext as shared_aliascontext


@dataclass_json
@dataclasses.dataclass
class GerritSourceContext:
    r"""GerritSourceContext
    A SourceContext referring to a Gerrit project.
    """
    
    alias_context: Optional[shared_aliascontext.AliasContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliasContext') }})
    gerrit_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gerritProject') }})
    host_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostUri') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
