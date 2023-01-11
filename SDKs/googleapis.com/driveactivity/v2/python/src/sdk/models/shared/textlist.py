import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import text as shared_text


@dataclass_json
@dataclasses.dataclass
class TextList:
    r"""TextList
    Wrapper for Text List Field value.
    """
    
    values: Optional[list[shared_text.Text]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
