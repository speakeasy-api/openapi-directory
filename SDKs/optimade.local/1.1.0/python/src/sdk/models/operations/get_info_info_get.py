import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import inforesponse as shared_inforesponse


@dataclasses.dataclass
class GetInfoInfoGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    info_response: Optional[shared_inforesponse.InfoResponse] = dataclasses.field(default=None)
    
