import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comment as shared_comment


@dataclass_json
@dataclasses.dataclass
class CommentThreadSnippet:
    r"""CommentThreadSnippet
    Basic details about a comment thread.
    """
    
    can_reply: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReply') }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    is_public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPublic') }})
    top_level_comment: Optional[shared_comment.Comment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevelComment') }})
    total_reply_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReplyCount') }})
    video_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    
