import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controllers_advisorydetailitem as shared_controllers_advisorydetailitem


@dataclass_json
@dataclasses.dataclass
class ControllersAdvisoryDetailResponse:
    data: Optional[shared_controllers_advisorydetailitem.ControllersAdvisoryDetailItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
