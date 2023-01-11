import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicedescription as shared_servicedescription

class DescribeServiceResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclasses.dataclass
class DescribeServiceResponse:
    api: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: shared_servicedescription.ServiceDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: DescribeServiceResponseStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
