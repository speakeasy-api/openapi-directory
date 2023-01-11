import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostReviewsReviewIDPathParams:
    review_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostReviewsReviewIDQueryParams:
    description: str = dataclasses.field(metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    headline: str = dataclasses.field(metadata={'query_param': { 'field_name': 'headline', 'style': 'form', 'explode': True }})
    rating: int = dataclasses.field(metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    user_account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReviewsReviewIDRequest:
    path_params: PostReviewsReviewIDPathParams = dataclasses.field()
    query_params: PostReviewsReviewIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostReviewsReviewIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
