import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import task as shared_task


@dataclasses.dataclass
class GetTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaskSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTaskRequest:
    path_params: GetTaskPathParams = dataclasses.field()
    security: GetTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task: Optional[shared_task.Task] = dataclasses.field(default=None)
    
