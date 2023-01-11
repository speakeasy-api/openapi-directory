import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionTagListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionTagListRequest:
    query_params: GetActionTagListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionTagListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
