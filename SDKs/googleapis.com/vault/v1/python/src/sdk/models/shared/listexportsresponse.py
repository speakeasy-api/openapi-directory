import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import export as shared_export


@dataclass_json
@dataclasses.dataclass
class ListExportsResponse:
    r"""ListExportsResponse
    The exports for a matter.
    """
    
    exports: Optional[list[shared_export.Export]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exports') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
