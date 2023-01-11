import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import stagedemployee as shared_stagedemployee
from ..shared import error as shared_error
from ..shared import trackingnumberresponse as shared_trackingnumberresponse


@dataclasses.dataclass
class AddNewEmployeeToWebLinkPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddNewEmployeeToWebLinkSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddNewEmployeeToWebLinkRequest:
    path_params: AddNewEmployeeToWebLinkPathParams = dataclasses.field()
    request: shared_stagedemployee.StagedEmployee = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddNewEmployeeToWebLinkSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddNewEmployeeToWebLinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    tracking_number_responses: Optional[list[shared_trackingnumberresponse.TrackingNumberResponse]] = dataclasses.field(default=None)
    
