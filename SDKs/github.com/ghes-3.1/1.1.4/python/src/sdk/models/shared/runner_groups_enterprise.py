import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RunnerGroupsEnterprise:
    allows_public_repositories: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allows_public_repositories') }})
    default: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runners_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners_url') }})
    visibility: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    selected_organizations_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organizations_url') }})
    
