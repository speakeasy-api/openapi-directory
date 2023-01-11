import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import note as shared_note


@dataclass_json
@dataclasses.dataclass
class AddNoteRequestInput:
    r"""AddNoteRequestInput
    Request message for adding a note to a given proposal.
    """
    
    note: Optional[shared_note.NoteInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
