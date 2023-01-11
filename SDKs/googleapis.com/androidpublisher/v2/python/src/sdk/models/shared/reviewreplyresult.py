import dataclasses
from typing import Optional
from ..shared import timestamp as shared_timestamp


@dataclasses.dataclass
class ReviewReplyResult:
    last_edited: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None)
    reply_text: Optional[str] = dataclasses.field(default=None)
    
