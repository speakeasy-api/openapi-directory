import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import format_enum as shared_format_enum
from ..shared import verifyrequest as shared_verifyrequest
from ..shared import requestresponse as shared_requestresponse
from ..shared import requesterrorresponse as shared_requesterrorresponse


@dataclasses.dataclass
class VerifyRequestPathParams:
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VerifyRequestRequest:
    path_params: VerifyRequestPathParams = dataclasses.field()
    request: shared_verifyrequest.VerifyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class VerifyRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    verify_request_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
