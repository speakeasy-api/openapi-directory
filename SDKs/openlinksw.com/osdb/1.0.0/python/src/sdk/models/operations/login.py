import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import loginresponse as shared_loginresponse


@dataclasses.dataclass
class LoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    login_response: Optional[shared_loginresponse.LoginResponse] = dataclasses.field(default=None)
    
