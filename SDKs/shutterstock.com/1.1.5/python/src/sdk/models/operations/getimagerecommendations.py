import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetImageRecommendationsQueryParams:
    id: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_items', 'style': 'form', 'explode': True }})
    safe: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetImageRecommendationsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetImageRecommendationsRequest:
    query_params: GetImageRecommendationsQueryParams = dataclasses.field()
    security: GetImageRecommendationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetImageRecommendationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    recommendation_data_list: Optional[Any] = dataclasses.field(default=None)
    
