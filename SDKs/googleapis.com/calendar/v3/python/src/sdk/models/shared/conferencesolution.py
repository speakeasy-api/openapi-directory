import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conferencesolutionkey as shared_conferencesolutionkey


@dataclass_json
@dataclasses.dataclass
class ConferenceSolution:
    icon_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUri') }})
    key: Optional[shared_conferencesolutionkey.ConferenceSolutionKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
