import dataclasses
from typing import Optional
from ..shared import paginatedagentlocationresult as shared_paginatedagentlocationresult


@dataclasses.dataclass
class GetAgentLocationsPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentLocationsQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAgentLocationsRequest:
    path_params: GetAgentLocationsPathParams = dataclasses.field()
    query_params: GetAgentLocationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentLocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_agent_location_result: Optional[shared_paginatedagentlocationresult.PaginatedAgentLocationResult] = dataclasses.field(default=None)
    
