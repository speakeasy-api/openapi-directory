import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HlRrequestGetHlrEnum(str, Enum):
    ONE = "1"


@dataclass_json
@dataclasses.dataclass
class HlRrequest:
    get_hlr: HlRrequestGetHlrEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('getHLR') }})
    keyid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    num: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('num') }})
    
