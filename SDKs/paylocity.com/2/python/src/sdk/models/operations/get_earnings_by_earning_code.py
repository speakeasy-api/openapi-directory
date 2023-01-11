import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import earning as shared_earning
from ..shared import error as shared_error


@dataclasses.dataclass
class GetEarningsByEarningCodePathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    earning_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'earningCode', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEarningsByEarningCodeSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEarningsByEarningCodeRequest:
    path_params: GetEarningsByEarningCodePathParams = dataclasses.field()
    security: GetEarningsByEarningCodeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEarningsByEarningCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    earnings: Optional[list[shared_earning.Earning]] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
