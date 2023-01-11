import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account


@dataclass_json
@dataclasses.dataclass
class GetAccount401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    get_account_401_application_json_object: Optional[GetAccount401ApplicationJSON] = dataclasses.field(default=None)
    
