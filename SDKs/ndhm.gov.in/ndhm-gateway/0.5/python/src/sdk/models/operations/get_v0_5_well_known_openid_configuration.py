import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import openidconfiguration as shared_openidconfiguration


@dataclasses.dataclass
class GetV05WellKnownOpenidConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    open_id_configuration: Optional[shared_openidconfiguration.OpenIDConfiguration] = dataclasses.field(default=None)
    
