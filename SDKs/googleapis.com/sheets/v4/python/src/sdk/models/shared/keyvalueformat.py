import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textposition as shared_textposition
from ..shared import textformat as shared_textformat


@dataclass_json
@dataclasses.dataclass
class KeyValueFormat:
    r"""KeyValueFormat
    Formatting options for key value.
    """
    
    position: Optional[shared_textposition.TextPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    text_format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    
