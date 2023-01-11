import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTaskScanDataPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaskScanDataSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetTaskScanDataRequest:
    path_params: GetTaskScanDataPathParams = dataclasses.field()
    security: GetTaskScanDataSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTaskScanDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
