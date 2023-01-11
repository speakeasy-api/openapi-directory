import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obaccount6 as shared_obaccount6


@dataclass_json
@dataclasses.dataclass
class ObReadDataAccount5:
    account: Optional[list[shared_obaccount6.ObAccount6]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Account') }})
    
