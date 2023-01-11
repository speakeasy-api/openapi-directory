import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import badwordfilterresponse as shared_badwordfilterresponse

class BadWordFilterRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class BadWordFilterRequestBody:
    content: str = dataclasses.field(metadata={'form': { 'field_name': 'content' }})
    catalog: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'catalog' }})
    censor_character: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'censor-character' }})
    output_case: Optional[BadWordFilterRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class BadWordFilterRequest:
    request: Optional[BadWordFilterRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class BadWordFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    bad_word_filter_response: Optional[shared_badwordfilterresponse.BadWordFilterResponse] = dataclasses.field(default=None)
    
