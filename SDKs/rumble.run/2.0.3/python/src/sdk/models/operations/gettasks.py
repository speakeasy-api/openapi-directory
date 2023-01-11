import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import task as shared_task


@dataclasses.dataclass
class GetTasksQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTasksSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTasksRequest:
    query_params: GetTasksQueryParams = dataclasses.field()
    security: GetTasksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tasks: Optional[list[shared_task.Task]] = dataclasses.field(default=None)
    
