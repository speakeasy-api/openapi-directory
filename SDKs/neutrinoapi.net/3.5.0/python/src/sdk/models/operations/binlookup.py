import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import binlookupresponse as shared_binlookupresponse

class BinLookupRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class BinLookupRequestBody:
    bin_number: str = dataclasses.field(metadata={'form': { 'field_name': 'bin-number' }})
    customer_ip: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'customer-ip' }})
    output_case: Optional[BinLookupRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class BinLookupRequest:
    request: Optional[BinLookupRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class BinLookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    bin_lookup_response: Optional[shared_binlookupresponse.BinLookupResponse] = dataclasses.field(default=None)
    
