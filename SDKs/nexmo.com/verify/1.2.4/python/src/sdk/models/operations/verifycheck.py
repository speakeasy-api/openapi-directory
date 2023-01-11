import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import format_enum as shared_format_enum
from ..shared import checkrequest as shared_checkrequest
from ..shared import checkresponse as shared_checkresponse
from ..shared import checkerrorresponse as shared_checkerrorresponse


@dataclasses.dataclass
class VerifyCheckPathParams:
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VerifyCheckRequest:
    path_params: VerifyCheckPathParams = dataclasses.field()
    request: shared_checkrequest.CheckRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class VerifyCheckResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    verify_check_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
