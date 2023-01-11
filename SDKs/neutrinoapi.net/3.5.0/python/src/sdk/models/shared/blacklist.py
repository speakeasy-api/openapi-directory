import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Blacklist:
    is_listed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isListed') }})
    list_host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listHost') }})
    list_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listName') }})
    list_rating: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listRating') }})
    response_time: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseTime') }})
    return_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnCode') }})
    txt_record: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txtRecord') }})
    
