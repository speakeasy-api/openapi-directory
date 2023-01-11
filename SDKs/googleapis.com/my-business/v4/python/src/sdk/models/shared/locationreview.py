import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import review as shared_review


@dataclass_json
@dataclasses.dataclass
class LocationReview:
    r"""LocationReview
    Represents a review with location information.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    review: Optional[shared_review.Review] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review') }})
    
