import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class APIError:
    api_error: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiError') }})
    api_error_msg: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiErrorMsg') }})
    
