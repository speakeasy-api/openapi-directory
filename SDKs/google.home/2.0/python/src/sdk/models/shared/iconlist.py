import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IconList:
    depth: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('depth') }})
    height: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    mimetype: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimetype') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
