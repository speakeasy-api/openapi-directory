import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicedescription as shared_servicedescription

class ListServicesResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclasses.dataclass
class ListServicesResponse:
    api: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: list[shared_servicedescription.ServiceDescription] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: ListServicesResponseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
