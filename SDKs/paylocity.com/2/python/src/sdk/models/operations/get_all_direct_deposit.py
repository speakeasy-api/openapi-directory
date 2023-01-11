import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import directdeposit as shared_directdeposit
from ..shared import error as shared_error


@dataclasses.dataclass
class GetAllDirectDepositPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllDirectDepositSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllDirectDepositRequest:
    path_params: GetAllDirectDepositPathParams = dataclasses.field()
    security: GetAllDirectDepositSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllDirectDepositResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    direct_deposits: Optional[list[shared_directdeposit.DirectDeposit]] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
