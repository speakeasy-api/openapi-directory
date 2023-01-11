import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class SubmitProjectReportsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubmitProjectReportsRequestBody:
    activity_type: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'activity_type' }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'message' }})
    

@dataclasses.dataclass
class SubmitProjectReportsRequest:
    path_params: SubmitProjectReportsPathParams = dataclasses.field()
    request: Optional[SubmitProjectReportsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SubmitProjectReportsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
