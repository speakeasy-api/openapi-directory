import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ValidateForVoiceQueryParams:
    number: str = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ValidateForVoice200ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    success: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclasses.dataclass
class ValidateForVoiceRequest:
    query_params: ValidateForVoiceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ValidateForVoiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validate_for_voice_200_application_json_object: Optional[ValidateForVoice200ApplicationJSON] = dataclasses.field(default=None)
    
