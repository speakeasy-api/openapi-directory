import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deletionresponse as shared_deletionresponse


@dataclasses.dataclass
class GetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetRequest:
    path_params: GetPathParams = dataclasses.field()
    security: GetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deletion_response: Optional[shared_deletionresponse.DeletionResponse] = dataclasses.field(default=None)
    
