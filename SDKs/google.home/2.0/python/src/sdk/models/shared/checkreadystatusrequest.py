import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CheckReadyStatusRequest:
    play_ready_message: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_ready_message') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
