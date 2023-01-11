import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationRevisionListQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationRevisionListRequest:
    query_params: GetActionOrganizationRevisionListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationRevisionListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
