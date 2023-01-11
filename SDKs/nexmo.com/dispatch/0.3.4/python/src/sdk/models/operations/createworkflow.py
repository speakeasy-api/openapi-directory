import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import createworkflow as shared_createworkflow
from ..shared import error as shared_error
from ..shared import response as shared_response


@dataclasses.dataclass
class CreateWorkflowSecurity:
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared_security.SchemeBearerAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateWorkflowRequest:
    request: shared_createworkflow.CreateWorkflow = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateWorkflowSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateWorkflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    
