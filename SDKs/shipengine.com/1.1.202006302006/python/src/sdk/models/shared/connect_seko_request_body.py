import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectSekoRequestBody:
    r"""ConnectSekoRequestBody
    A SEKO account information request body
    """
    
    access_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_key') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    
