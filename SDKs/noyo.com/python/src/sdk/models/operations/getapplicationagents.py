import dataclasses
from typing import Optional
from ..shared import paginatedagentresult as shared_paginatedagentresult


@dataclasses.dataclass
class GetApplicationAgentsPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationAgentsQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetApplicationAgentsRequest:
    path_params: GetApplicationAgentsPathParams = dataclasses.field()
    query_params: GetApplicationAgentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationAgentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_agent_result: Optional[shared_paginatedagentresult.PaginatedAgentResult] = dataclasses.field(default=None)
    
