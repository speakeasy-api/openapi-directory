import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obtransaction6 as shared_obtransaction6


@dataclass_json
@dataclasses.dataclass
class ObReadDataTransaction6:
    transaction: Optional[list[shared_obtransaction6.ObTransaction6]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transaction') }})
    
