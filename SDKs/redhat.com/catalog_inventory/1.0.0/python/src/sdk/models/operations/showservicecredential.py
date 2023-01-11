import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import servicecredential as shared_servicecredential


@dataclasses.dataclass
class ShowServiceCredentialPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowServiceCredentialRequest:
    path_params: ShowServiceCredentialPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowServiceCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_credential: Optional[shared_servicecredential.ServiceCredential] = dataclasses.field(default=None)
    
