import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import ipinforesponse as shared_ipinforesponse

class IPInfoRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class IPInfoRequestBody:
    ip: str = dataclasses.field(metadata={'form': { 'field_name': 'ip' }})
    output_case: Optional[IPInfoRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    reverse_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'reverse-lookup' }})
    

@dataclasses.dataclass
class IPInfoRequest:
    request: Optional[IPInfoRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class IPInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    ip_info_response: Optional[shared_ipinforesponse.IPInfoResponse] = dataclasses.field(default=None)
    
