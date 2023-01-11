import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matter as shared_matter


@dataclass_json
@dataclasses.dataclass
class ListMattersResponse:
    r"""ListMattersResponse
    Provides the list of matters.
    """
    
    matters: Optional[list[shared_matter.Matter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matters') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
