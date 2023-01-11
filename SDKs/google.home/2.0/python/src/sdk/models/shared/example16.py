import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Example16:
    bytes_received: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytes_received') }})
    response_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_code') }})
    time_for_data_fetch: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_for_data_fetch') }})
    time_for_http_response: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_for_http_response') }})
    
