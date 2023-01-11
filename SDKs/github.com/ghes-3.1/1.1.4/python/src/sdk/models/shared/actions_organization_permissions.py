import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowed_actions_enum as shared_allowed_actions_enum
from ..shared import enabled_repositories_enum as shared_enabled_repositories_enum


@dataclass_json
@dataclasses.dataclass
class ActionsOrganizationPermissions:
    enabled_repositories: shared_enabled_repositories_enum.EnabledRepositoriesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_repositories') }})
    allowed_actions: Optional[shared_allowed_actions_enum.AllowedActionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    selected_actions_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_actions_url') }})
    selected_repositories_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repositories_url') }})
    
