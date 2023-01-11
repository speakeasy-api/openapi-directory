import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deletionresponse as shared_deletionresponse


@dataclasses.dataclass
class DeleteModelPathParams:
    model_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteModelSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteModelRequest:
    path_params: DeleteModelPathParams = dataclasses.field()
    security: DeleteModelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteModelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deletion_response: Optional[shared_deletionresponse.DeletionResponse] = dataclasses.field(default=None)
    
