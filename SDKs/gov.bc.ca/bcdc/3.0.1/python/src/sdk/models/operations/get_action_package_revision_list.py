import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionPackageRevisionListQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionPackageRevisionListRequest:
    query_params: GetActionPackageRevisionListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionPackageRevisionListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
