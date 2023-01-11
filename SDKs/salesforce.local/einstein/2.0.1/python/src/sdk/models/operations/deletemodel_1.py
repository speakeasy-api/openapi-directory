import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deletionresponse as shared_deletionresponse


@dataclasses.dataclass
class DeleteModel1PathParams:
    model_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'modelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteModel1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteModel1Request:
    path_params: DeleteModel1PathParams = dataclasses.field()
    security: DeleteModel1Security = dataclasses.field()
    

@dataclasses.dataclass
class DeleteModel1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deletion_response: Optional[shared_deletionresponse.DeletionResponse] = dataclasses.field(default=None)
    
