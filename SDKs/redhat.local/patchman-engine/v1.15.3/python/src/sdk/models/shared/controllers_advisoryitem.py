import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controllers_advisoryitemattributes as shared_controllers_advisoryitemattributes


@dataclass_json
@dataclasses.dataclass
class ControllersAdvisoryItem:
    attributes: Optional[shared_controllers_advisoryitemattributes.ControllersAdvisoryItemAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
