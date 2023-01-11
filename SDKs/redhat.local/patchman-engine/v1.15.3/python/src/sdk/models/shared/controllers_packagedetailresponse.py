import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controllers_packagedetailitem as shared_controllers_packagedetailitem


@dataclass_json
@dataclasses.dataclass
class ControllersPackageDetailResponse:
    data: Optional[shared_controllers_packagedetailitem.ControllersPackageDetailItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
