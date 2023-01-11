import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiondescription as shared_actiondescription

class ListActionsResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclasses.dataclass
class ListActionsResponse:
    api: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: list[shared_actiondescription.ActionDescription] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: ListActionsResponseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
