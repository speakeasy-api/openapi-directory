import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pageinfo as shared_pageinfo
from ..shared import review as shared_review
from ..shared import tokenpagination as shared_tokenpagination


@dataclass_json
@dataclasses.dataclass
class ReviewsListResponse:
    r"""ReviewsListResponse
    Response listing reviews.
    """
    
    page_info: Optional[shared_pageinfo.PageInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    reviews: Optional[list[shared_review.Review]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviews') }})
    token_pagination: Optional[shared_tokenpagination.TokenPagination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenPagination') }})
    
