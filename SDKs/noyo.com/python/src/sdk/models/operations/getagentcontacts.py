import dataclasses
from typing import Optional
from ..shared import paginatedagentcontactresults as shared_paginatedagentcontactresults


@dataclasses.dataclass
class GetAgentContactsPathParams:
    agent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAgentContactsQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAgentContactsRequest:
    path_params: GetAgentContactsPathParams = dataclasses.field()
    query_params: GetAgentContactsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAgentContactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_agent_contact_results: Optional[shared_paginatedagentcontactresults.PaginatedAgentContactResults] = dataclasses.field(default=None)
    
