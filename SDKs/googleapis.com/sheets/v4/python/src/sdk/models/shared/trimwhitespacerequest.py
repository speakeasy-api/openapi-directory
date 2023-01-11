import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange


@dataclass_json
@dataclasses.dataclass
class TrimWhitespaceRequest:
    r"""TrimWhitespaceRequest
    Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula.
    """
    
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
