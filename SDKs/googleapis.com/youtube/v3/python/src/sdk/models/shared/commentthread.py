import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commentthreadreplies as shared_commentthreadreplies
from ..shared import commentthreadsnippet as shared_commentthreadsnippet


@dataclass_json
@dataclasses.dataclass
class CommentThread:
    r"""CommentThread
    A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    replies: Optional[shared_commentthreadreplies.CommentThreadReplies] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    snippet: Optional[shared_commentthreadsnippet.CommentThreadSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
