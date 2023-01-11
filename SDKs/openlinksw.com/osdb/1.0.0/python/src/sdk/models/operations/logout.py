import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import logoutresponse as shared_logoutresponse


@dataclasses.dataclass
class LogoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    logout_response: Optional[shared_logoutresponse.LogoutResponse] = dataclasses.field(default=None)
    
