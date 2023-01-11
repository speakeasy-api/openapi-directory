import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import validationresult as shared_validationresult


@dataclasses.dataclass
class ValidateURLQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ValidateURLRequest:
    query_params: ValidateURLQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ValidateURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    validation_result: Optional[shared_validationresult.ValidationResult] = dataclasses.field(default=None)
    
