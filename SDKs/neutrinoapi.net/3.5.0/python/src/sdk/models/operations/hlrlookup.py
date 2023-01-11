import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import hlrlookupresponse as shared_hlrlookupresponse

class HlrLookupRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class HlrLookupRequestBody:
    number: str = dataclasses.field(metadata={'form': { 'field_name': 'number' }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'country-code' }})
    output_case: Optional[HlrLookupRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class HlrLookupRequest:
    request: Optional[HlrLookupRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class HlrLookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    hlr_lookup_response: Optional[shared_hlrlookupresponse.HlrLookupResponse] = dataclasses.field(default=None)
    
