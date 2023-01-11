import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controllers_systemadvisoryitemattributes as shared_controllers_systemadvisoryitemattributes


@dataclass_json
@dataclasses.dataclass
class ControllersSystemAdvisoryItem:
    attributes: Optional[shared_controllers_systemadvisoryitemattributes.ControllersSystemAdvisoryItemAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
