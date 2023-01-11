import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PollOption:
    r"""PollOption
    Describes a choice in a Poll object.
    """
    
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    position: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    votes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('votes') }})
    
