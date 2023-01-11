import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class HideTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class HideTaskSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class HideTaskRequest:
    path_params: HideTaskPathParams = dataclasses.field()
    security: HideTaskSecurity = dataclasses.field()
    

@dataclasses.dataclass
class HideTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
