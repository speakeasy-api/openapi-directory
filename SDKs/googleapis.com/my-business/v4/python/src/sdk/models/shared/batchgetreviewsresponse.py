import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationreview as shared_locationreview


@dataclass_json
@dataclasses.dataclass
class BatchGetReviewsResponse:
    r"""BatchGetReviewsResponse
    Response message for Reviews.BatchGetReviews.
    """
    
    location_reviews: Optional[list[shared_locationreview.LocationReview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationReviews') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
