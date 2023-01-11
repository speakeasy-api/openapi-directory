import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controllers_packagedetailattributes as shared_controllers_packagedetailattributes


@dataclass_json
@dataclasses.dataclass
class ControllersPackageDetailItem:
    attributes: Optional[shared_controllers_packagedetailattributes.ControllersPackageDetailAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
