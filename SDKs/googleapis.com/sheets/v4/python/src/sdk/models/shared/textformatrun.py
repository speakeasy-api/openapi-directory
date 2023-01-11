import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textformat as shared_textformat


@dataclass_json
@dataclasses.dataclass
class TextFormatRun:
    r"""TextFormatRun
    A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
    """
    
    format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    
