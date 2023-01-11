import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import task as shared_task


@dataclasses.dataclass
class ShowTaskPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowTaskRequest:
    path_params: ShowTaskPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    task: Optional[shared_task.Task] = dataclasses.field(default=None)
    
