import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LogoutResponseResponse:
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class LogoutResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclasses.dataclass
class LogoutResponse:
    api: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: LogoutResponseResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: LogoutResponseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
