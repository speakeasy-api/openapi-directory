import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blacklist as shared_blacklist


@dataclass_json
@dataclasses.dataclass
class HostReputationResponse:
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    is_listed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isListed') }})
    list_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listCount') }})
    lists: list[shared_blacklist.Blacklist] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lists') }})
    
