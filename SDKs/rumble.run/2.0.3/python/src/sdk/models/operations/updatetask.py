import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import task as shared_task


@dataclasses.dataclass
class UpdateTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTaskSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = dataclasses.field()
    request: shared_task.Task = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task: Optional[shared_task.Task] = dataclasses.field(default=None)
    
