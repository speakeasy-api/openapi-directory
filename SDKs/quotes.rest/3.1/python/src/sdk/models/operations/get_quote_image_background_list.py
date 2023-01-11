import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteImageBackgroundListQueryParams:
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteImageBackgroundListSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteImageBackgroundListRequest:
    query_params: GetQuoteImageBackgroundListQueryParams = dataclasses.field()
    security: GetQuoteImageBackgroundListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteImageBackgroundListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
