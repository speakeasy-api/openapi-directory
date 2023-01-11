import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class GetAccountKeysSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountKeysRequest:
    security: GetAccountKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_keys: Optional[list[shared_apikey.APIKey]] = dataclasses.field(default=None)
    
