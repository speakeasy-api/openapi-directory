import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import flag as shared_flag


@dataclass_json
@dataclasses.dataclass
class FlagsListResponse:
    r"""FlagsListResponse
    Flags list response.
    """
    
    items: Optional[list[shared_flag.Flag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
