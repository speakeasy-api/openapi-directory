import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import earnings as shared_earnings
from ..shared import error as shared_error


@dataclasses.dataclass
class GetUserEarningsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserEarningsSecurity:
    mwo_auth: shared_security.SchemeMwoAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserEarningsRequest:
    path_params: GetUserEarningsPathParams = dataclasses.field()
    security: GetUserEarningsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserEarningsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    earnings: Optional[shared_earnings.Earnings] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
