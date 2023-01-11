import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localpost as shared_localpost


@dataclass_json
@dataclasses.dataclass
class ListLocalPostsResponse:
    r"""ListLocalPostsResponse
    Response message for ListLocalPosts
    """
    
    local_posts: Optional[list[shared_localpost.LocalPost]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPosts') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
