import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PatientAuthRequesterTypeEnum(str, Enum):
    HIP = "HIP"
    HIU = "HIU"


@dataclass_json
@dataclasses.dataclass
class PatientAuthRequester:
    r"""PatientAuthRequester
    identification of requester
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: PatientAuthRequesterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
