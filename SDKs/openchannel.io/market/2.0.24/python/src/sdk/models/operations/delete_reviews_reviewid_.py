import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteReviewsReviewIDPathParams:
    review_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteReviewsReviewIDQueryParams:
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    user_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteReviewsReviewIDRequest:
    path_params: DeleteReviewsReviewIDPathParams = dataclasses.field()
    query_params: DeleteReviewsReviewIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteReviewsReviewIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
