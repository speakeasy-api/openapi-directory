import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteListSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteListRequest:
    query_params: GetQuoteListQueryParams = dataclasses.field()
    security: GetQuoteListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
