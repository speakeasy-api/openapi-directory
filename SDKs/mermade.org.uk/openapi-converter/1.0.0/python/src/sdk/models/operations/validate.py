import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import validationresult as shared_validationresult


@dataclasses.dataclass
class ValidateRequestBody:
    filename: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'filename' }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'source' }})
    

@dataclasses.dataclass
class ValidateRequest:
    request: Optional[ValidateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    validate_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    validation_result: Optional[shared_validationresult.ValidationResult] = dataclasses.field(default=None)
    
