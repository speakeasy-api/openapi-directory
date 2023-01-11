import dataclasses
from typing import Optional
from ..shared import export as shared_export


@dataclasses.dataclass
class GetExportsPathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExportsHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExportsRequest:
    headers: GetExportsHeaders = dataclasses.field()
    path_params: GetExportsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExportsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    exports: Optional[list[shared_export.Export]] = dataclasses.field(default=None)
    
