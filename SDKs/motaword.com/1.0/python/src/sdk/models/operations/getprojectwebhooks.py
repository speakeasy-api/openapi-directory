import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import project as shared_project


@dataclasses.dataclass
class GetProjectWebhooksPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectWebhooksRequest:
    path_params: GetProjectWebhooksPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
