import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQshowListQueryParams:
    public: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'public', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQshowListSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQshowListRequest:
    query_params: GetQshowListQueryParams = dataclasses.field()
    security: GetQshowListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQshowListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
