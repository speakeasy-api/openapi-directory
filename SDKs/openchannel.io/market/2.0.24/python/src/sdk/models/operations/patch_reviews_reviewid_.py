import dataclasses
from typing import Optional


@dataclasses.dataclass
class PatchReviewsReviewIDPathParams:
    review_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchReviewsReviewIDQueryParams:
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    headline: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'headline', 'style': 'form', 'explode': True }})
    rating: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    user_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatchReviewsReviewIDRequest:
    path_params: PatchReviewsReviewIDPathParams = dataclasses.field()
    query_params: PatchReviewsReviewIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PatchReviewsReviewIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
