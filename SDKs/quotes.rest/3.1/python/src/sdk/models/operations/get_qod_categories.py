import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQodCategoriesQueryParams:
    detailed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'detailed', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQodCategoriesSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQodCategoriesRequest:
    query_params: GetQodCategoriesQueryParams = dataclasses.field()
    security: GetQodCategoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQodCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
