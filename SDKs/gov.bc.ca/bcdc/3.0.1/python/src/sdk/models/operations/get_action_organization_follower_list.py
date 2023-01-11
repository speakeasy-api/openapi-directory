import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationFollowerListQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationFollowerListRequest:
    query_params: GetActionOrganizationFollowerListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationFollowerListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
