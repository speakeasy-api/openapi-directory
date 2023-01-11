import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectDhlExpressAuRequestBody:
    r"""ConnectDhlExpressAuRequestBody
    A DHL Express AU account information request body
    """
    
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    
