import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import application as shared_application


@dataclasses.dataclass
class UpdateApplicationPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    
class UpdateApplicationRequestBodyTypeEnum(str, Enum):
    VOICE = "voice"
    MESSAGES = "messages"


@dataclass_json
@dataclasses.dataclass
class UpdateApplicationRequestBody:
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    api_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_secret') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: UpdateApplicationRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    answer_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_method') }})
    answer_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer_url') }})
    event_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_method') }})
    event_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_url') }})
    

@dataclasses.dataclass
class UpdateApplicationRequest:
    path_params: UpdateApplicationPathParams = dataclasses.field()
    request: Optional[UpdateApplicationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application: Optional[shared_application.Application] = dataclasses.field(default=None)
    
