import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubaccountAddResponseEtatEtat:
    code: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    sub_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountId') }})
    sub_account_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountKeyId') }})
    sub_account_login: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountLogin') }})
    

@dataclass_json
@dataclasses.dataclass
class SubaccountAddResponseEtat:
    etat: Optional[list[SubaccountAddResponseEtatEtat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etat') }})
    

@dataclass_json
@dataclasses.dataclass
class SubaccountAddResponse:
    etat: Optional[SubaccountAddResponseEtat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etat') }})
    
