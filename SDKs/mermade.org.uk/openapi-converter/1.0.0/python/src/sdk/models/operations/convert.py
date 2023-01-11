import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ConvertRequestBodyValidateEnum(str, Enum):
    ON = "on"


@dataclasses.dataclass
class ConvertRequestBody:
    filename: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'filename' }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'source' }})
    validate: Optional[ConvertRequestBodyValidateEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'validate' }})
    

@dataclasses.dataclass
class ConvertRequest:
    request: Optional[ConvertRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ConvertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    convert_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    convert_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
