import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestamp as shared_timestamp


@dataclass_json
@dataclasses.dataclass
class ReviewReplyResult:
    r"""ReviewReplyResult
    The result of replying/updating a reply to review.
    """
    
    last_edited: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEdited') }})
    reply_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyText') }})
    
