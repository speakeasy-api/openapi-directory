import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reviewreplyresult as shared_reviewreplyresult


@dataclass_json
@dataclasses.dataclass
class ReviewsReplyResponse:
    r"""ReviewsReplyResponse
    Response on status of replying to a review.
    """
    
    result: Optional[shared_reviewreplyresult.ReviewReplyResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
