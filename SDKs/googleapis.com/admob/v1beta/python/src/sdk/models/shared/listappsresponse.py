import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import app as shared_app


@dataclass_json
@dataclasses.dataclass
class ListAppsResponse:
    r"""ListAppsResponse
    Response for the apps list request.
    """
    
    apps: Optional[list[shared_app.App]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
