import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubaccountAddRequestSubAccountEditEnum(str, Enum):
    ADD_ACCOUNT = "addAccount"


@dataclass_json
@dataclasses.dataclass
class SubaccountAddRequest:
    keyid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    sub_account_edit: SubaccountAddRequestSubAccountEditEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountEdit') }})
    sub_account_login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountLogin') }})
    sub_account_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subAccountPassword') }})
    
