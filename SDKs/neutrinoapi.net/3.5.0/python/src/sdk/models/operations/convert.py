import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import convertresponse as shared_convertresponse

class ConvertRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class ConvertRequestBody:
    from_type: str = dataclasses.field(metadata={'form': { 'field_name': 'from-type' }})
    from_value: str = dataclasses.field(metadata={'form': { 'field_name': 'from-value' }})
    to_type: str = dataclasses.field(metadata={'form': { 'field_name': 'to-type' }})
    output_case: Optional[ConvertRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class ConvertRequest:
    request: Optional[ConvertRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ConvertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    convert_response: Optional[shared_convertresponse.ConvertResponse] = dataclasses.field(default=None)
    
