import dataclasses
from typing import Any,Optional
from enum import Enum

class SendAnSmsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class SendAnSmsPathParams:
    format: SendAnSmsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendAnSmsRequest:
    path_params: SendAnSmsPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class SendAnSmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    send_an_sms_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
