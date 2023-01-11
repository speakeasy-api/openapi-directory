import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import session as shared_session


@dataclass_json
@dataclasses.dataclass
class ListSessionsResponse:
    deleted_session: Optional[list[shared_session.Session]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedSession') }})
    has_more_data: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMoreData') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    session: Optional[list[shared_session.Session]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    
