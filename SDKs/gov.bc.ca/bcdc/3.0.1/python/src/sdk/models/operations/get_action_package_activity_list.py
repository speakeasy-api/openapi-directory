import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionPackageActivityListQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionPackageActivityListRequest:
    query_params: GetActionPackageActivityListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionPackageActivityListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
