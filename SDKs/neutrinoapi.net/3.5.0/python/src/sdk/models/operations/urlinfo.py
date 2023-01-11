import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import urlinforesponse as shared_urlinforesponse

class URLInfoRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class URLInfoRequestBody:
    url: str = dataclasses.field(metadata={'form': { 'field_name': 'url' }})
    fetch_content: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'fetch-content' }})
    ignore_certificate_errors: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ignore-certificate-errors' }})
    output_case: Optional[URLInfoRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    retry: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'retry' }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'timeout' }})
    

@dataclasses.dataclass
class URLInfoRequest:
    request: Optional[URLInfoRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class URLInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    url_info_response: Optional[shared_urlinforesponse.URLInfoResponse] = dataclasses.field(default=None)
    
