import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionConfirmationBody:
    cancel_button_label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelButtonLabel') }})
    confirm_button_label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmButtonLabel') }})
    prompt: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prompt') }})
    
