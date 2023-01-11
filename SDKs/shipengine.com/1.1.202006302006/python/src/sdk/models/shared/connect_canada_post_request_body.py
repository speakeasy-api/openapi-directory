import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectCanadaPostRequestBody:
    r"""ConnectCanadaPostRequestBody
    A Canada Post account information request body
    """
    
    account_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    api_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_secret') }})
    contract_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contract_id') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    
