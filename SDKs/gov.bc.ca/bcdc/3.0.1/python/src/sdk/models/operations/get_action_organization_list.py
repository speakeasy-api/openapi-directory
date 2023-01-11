import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationListRequest:
    query_params: GetActionOrganizationListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
