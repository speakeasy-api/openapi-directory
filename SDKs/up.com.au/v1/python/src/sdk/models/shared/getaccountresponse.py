import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountresource as shared_accountresource


@dataclass_json
@dataclasses.dataclass
class GetAccountResponse:
    r"""GetAccountResponse
    Successful response to get a single account.
    
    """
    
    data: shared_accountresource.AccountResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
