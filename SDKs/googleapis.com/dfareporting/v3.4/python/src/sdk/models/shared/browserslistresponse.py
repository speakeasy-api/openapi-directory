import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import browser as shared_browser


@dataclass_json
@dataclasses.dataclass
class BrowsersListResponse:
    r"""BrowsersListResponse
    Browser List Response
    """
    
    browsers: Optional[list[shared_browser.Browser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browsers') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
