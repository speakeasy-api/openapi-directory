import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import credential as shared_credential


@dataclasses.dataclass
class GetAccountCredentialsQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountCredentialsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountCredentialsRequest:
    query_params: GetAccountCredentialsQueryParams = dataclasses.field()
    security: GetAccountCredentialsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountCredentialsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credentials: Optional[list[shared_credential.Credential]] = dataclasses.field(default=None)
    
