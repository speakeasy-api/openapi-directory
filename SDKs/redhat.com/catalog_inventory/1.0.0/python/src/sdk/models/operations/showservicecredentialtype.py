import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import servicecredentialtype as shared_servicecredentialtype


@dataclasses.dataclass
class ShowServiceCredentialTypePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowServiceCredentialTypeRequest:
    path_params: ShowServiceCredentialTypePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowServiceCredentialTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_credential_type: Optional[shared_servicecredentialtype.ServiceCredentialType] = dataclasses.field(default=None)
    
