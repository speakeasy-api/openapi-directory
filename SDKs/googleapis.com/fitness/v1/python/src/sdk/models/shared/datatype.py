import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datatypefield as shared_datatypefield


@dataclass_json
@dataclasses.dataclass
class DataType:
    field: Optional[list[shared_datatypefield.DataTypeField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
