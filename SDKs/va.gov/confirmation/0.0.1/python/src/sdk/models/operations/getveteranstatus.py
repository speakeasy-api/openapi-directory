import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import veteranstatusrequest as shared_veteranstatusrequest
from ..shared import apierror as shared_apierror
from ..shared import authorizationerror as shared_authorizationerror
from ..shared import veteranstatusconfirmation as shared_veteranstatusconfirmation


@dataclasses.dataclass
class GetVeteranStatusSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetVeteranStatusRequest:
    request: shared_veteranstatusrequest.VeteranStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetVeteranStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVeteranStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    authorization_error: Optional[shared_authorizationerror.AuthorizationError] = dataclasses.field(default=None)
    veteran_status_confirmation: Optional[shared_veteranstatusconfirmation.VeteranStatusConfirmation] = dataclasses.field(default=None)
    
