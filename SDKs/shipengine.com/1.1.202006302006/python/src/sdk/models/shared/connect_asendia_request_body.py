import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectAsendiaRequestBody:
    r"""ConnectAsendiaRequestBody
    An Asendia account information request body
    """
    
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    ftp_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ftp_password') }})
    ftp_username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ftp_username') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    
