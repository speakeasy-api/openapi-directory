import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import format_enum as shared_format_enum
from ..shared import controlrequest as shared_controlrequest
from ..shared import controlresponse as shared_controlresponse
from ..shared import controlerrorresponse as shared_controlerrorresponse


@dataclasses.dataclass
class VerifyControlPathParams:
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VerifyControlRequest:
    path_params: VerifyControlPathParams = dataclasses.field()
    request: shared_controlrequest.ControlRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class VerifyControlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    verify_control_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
