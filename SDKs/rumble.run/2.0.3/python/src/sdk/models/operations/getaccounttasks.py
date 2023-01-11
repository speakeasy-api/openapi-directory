import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import task as shared_task


@dataclasses.dataclass
class GetAccountTasksQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountTasksSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountTasksRequest:
    query_params: GetAccountTasksQueryParams = dataclasses.field()
    security: GetAccountTasksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tasks: Optional[list[shared_task.Task]] = dataclasses.field(default=None)
    
