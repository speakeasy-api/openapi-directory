import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetAuthValidate200ApplicationJSON:
    premium: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium') }})
    

@dataclasses.dataclass
class GetAuthValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_auth_validate_200_application_json_object: Optional[GetAuthValidate200ApplicationJSON] = dataclasses.field(default=None)
    
