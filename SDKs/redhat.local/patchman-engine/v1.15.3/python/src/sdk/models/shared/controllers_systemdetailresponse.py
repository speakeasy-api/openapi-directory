import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controllers_systemitem as shared_controllers_systemitem


@dataclass_json
@dataclasses.dataclass
class ControllersSystemDetailResponse:
    data: Optional[shared_controllers_systemitem.ControllersSystemItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
