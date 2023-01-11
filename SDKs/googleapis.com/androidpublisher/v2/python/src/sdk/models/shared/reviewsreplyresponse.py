import dataclasses
from typing import Optional
from ..shared import reviewreplyresult as shared_reviewreplyresult


@dataclasses.dataclass
class ReviewsReplyResponse:
    result: Optional[shared_reviewreplyresult.ReviewReplyResult] = dataclasses.field(default=None)
    
