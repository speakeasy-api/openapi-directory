import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comment as shared_comment


@dataclass_json
@dataclasses.dataclass
class ListCommentsResponse:
    r"""ListCommentsResponse
    The response message for the ListComments endpoint.
    """
    
    comments: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
