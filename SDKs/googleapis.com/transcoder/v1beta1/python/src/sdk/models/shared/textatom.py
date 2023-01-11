import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textinput as shared_textinput


@dataclass_json
@dataclasses.dataclass
class TextAtom:
    r"""TextAtom
    The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
    """
    
    inputs: Optional[list[shared_textinput.TextInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
