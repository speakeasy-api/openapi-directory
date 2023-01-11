import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import format_enum as shared_format_enum
from ..shared import psd2request as shared_psd2request
from ..shared import requestresponse as shared_requestresponse
from ..shared import requesterrorresponse as shared_requesterrorresponse


@dataclasses.dataclass
class VerifyRequestWithPsd2PathParams:
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VerifyRequestWithPsd2Request:
    path_params: VerifyRequestWithPsd2PathParams = dataclasses.field()
    request: shared_psd2request.Psd2Request = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class VerifyRequestWithPsd2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_request_with_psd2_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
