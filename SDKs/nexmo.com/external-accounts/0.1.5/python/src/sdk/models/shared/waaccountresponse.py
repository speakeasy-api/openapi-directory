import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WaAccountResponse:
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    external_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    applications: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
