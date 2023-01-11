import dataclasses
from typing import Optional
from ..shared import certs as shared_certs
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetV05CertsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    certs: Optional[shared_certs.Certs] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
