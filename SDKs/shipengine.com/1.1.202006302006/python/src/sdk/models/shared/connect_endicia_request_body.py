import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectEndiciaRequestBody:
    r"""ConnectEndiciaRequestBody
    An Endicia account information request body
    """
    
    account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    passphrase: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    
