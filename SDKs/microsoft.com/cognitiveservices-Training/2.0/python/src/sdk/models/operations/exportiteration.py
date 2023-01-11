import dataclasses
from typing import Optional
from ..shared import export as shared_export


@dataclasses.dataclass
class ExportIterationPathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportIterationQueryParams:
    platform: str = dataclasses.field(metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    flavor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'flavor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportIterationHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportIterationRequest:
    headers: ExportIterationHeaders = dataclasses.field()
    path_params: ExportIterationPathParams = dataclasses.field()
    query_params: ExportIterationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExportIterationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    export: Optional[shared_export.Export] = dataclasses.field(default=None)
    
