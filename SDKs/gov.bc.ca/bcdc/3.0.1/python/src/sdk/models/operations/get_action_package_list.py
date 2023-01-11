import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionPackageListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionPackageListRequest:
    query_params: GetActionPackageListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionPackageListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
