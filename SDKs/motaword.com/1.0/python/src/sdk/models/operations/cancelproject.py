import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class CancelProjectPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelProjectRequestBody:
    reason: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'reason' }})
    

@dataclasses.dataclass
class CancelProjectRequest:
    path_params: CancelProjectPathParams = dataclasses.field()
    request: Optional[CancelProjectRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CancelProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
