import dataclasses
from typing import Optional
from ..shared import pageinfo as shared_pageinfo
from ..shared import review as shared_review
from ..shared import tokenpagination as shared_tokenpagination


@dataclasses.dataclass
class ReviewsListResponse:
    page_info: Optional[shared_pageinfo.PageInfo] = dataclasses.field(default=None)
    reviews: Optional[list[shared_review.Review]] = dataclasses.field(default=None)
    token_pagination: Optional[shared_tokenpagination.TokenPagination] = dataclasses.field(default=None)
    
