import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectPurolatorRequestBody:
    r"""ConnectPurolatorRequestBody
    A Purolator account information request body
    """
    
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    activation_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activation_key') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    
