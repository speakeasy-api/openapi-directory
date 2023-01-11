import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectSendleRequestBody:
    r"""ConnectSendleRequestBody
    A Sendle account information request body
    """
    
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    sendle_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendle_id') }})
    
