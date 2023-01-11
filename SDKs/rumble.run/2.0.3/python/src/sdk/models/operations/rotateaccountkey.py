import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class RotateAccountKeyPathParams:
    key_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RotateAccountKeySecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RotateAccountKeyRequest:
    path_params: RotateAccountKeyPathParams = dataclasses.field()
    security: RotateAccountKeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class RotateAccountKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    
