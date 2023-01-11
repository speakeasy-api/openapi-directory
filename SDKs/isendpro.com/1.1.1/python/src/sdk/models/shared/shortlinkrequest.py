import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ShortlinkRequest:
    keyid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    shortlink: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortlink') }})
    
