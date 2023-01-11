import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostReviewsQueryParams:
    app_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    description: str = dataclasses.field(metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    headline: str = dataclasses.field(metadata={'query_param': { 'field_name': 'headline', 'style': 'form', 'explode': True }})
    rating: int = dataclasses.field(metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    auto_approve: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'autoApprove', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    must_own_app: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mustOwnApp', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    user_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReviewsRequest:
    query_params: PostReviewsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostReviewsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
