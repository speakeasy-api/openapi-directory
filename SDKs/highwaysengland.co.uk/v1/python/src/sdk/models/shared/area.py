import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Area:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    x_latitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XLatitude') }})
    x_longitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('XLongitude') }})
    y_latitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('YLatitude') }})
    y_longitude: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('YLongitude') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
