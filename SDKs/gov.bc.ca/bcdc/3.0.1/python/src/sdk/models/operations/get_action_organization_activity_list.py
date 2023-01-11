import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationActivityListQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationActivityListRequest:
    query_params: GetActionOrganizationActivityListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationActivityListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
