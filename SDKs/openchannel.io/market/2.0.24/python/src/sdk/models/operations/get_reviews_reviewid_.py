import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetReviewsReviewIDPathParams:
    review_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReviewsReviewIDRequest:
    path_params: GetReviewsReviewIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReviewsReviewIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
