import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webapp as shared_webapp


@dataclass_json
@dataclasses.dataclass
class ListWebAppsResponse:
    apps: Optional[list[shared_webapp.WebApp]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
