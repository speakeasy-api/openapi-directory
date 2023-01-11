import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RunnerGroupsOrg:
    allows_public_repositories: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_public_repositories') }})
    default: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inherited: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inherited') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runners_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners_url') }})
    visibility: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    inherited_allows_public_repositories: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inherited_allows_public_repositories') }})
    selected_repositories_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repositories_url') }})
    
