import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reply as shared_reply


@dataclass_json
@dataclasses.dataclass
class ReplyList:
    r"""ReplyList
    A list of replies to a comment on a file.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    replies: Optional[list[shared_reply.Reply]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    
