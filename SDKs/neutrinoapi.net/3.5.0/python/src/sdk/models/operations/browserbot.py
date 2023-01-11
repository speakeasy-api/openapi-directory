import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import browserbotresponse as shared_browserbotresponse

class BrowserBotRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class BrowserBotRequestBody:
    url: str = dataclasses.field(metadata={'form': { 'field_name': 'url' }})
    delay: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'delay' }})
    exec: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'exec' }})
    ignore_certificate_errors: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ignore-certificate-errors' }})
    output_case: Optional[BrowserBotRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    selector: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'selector' }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'timeout' }})
    user_agent: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'user-agent' }})
    

@dataclasses.dataclass
class BrowserBotRequest:
    request: Optional[BrowserBotRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class BrowserBotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    browser_bot_response: Optional[shared_browserbotresponse.BrowserBotResponse] = dataclasses.field(default=None)
    
