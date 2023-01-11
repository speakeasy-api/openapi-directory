import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import minimumordervaluetablestorecodesetwithmov as shared_minimumordervaluetablestorecodesetwithmov


@dataclass_json
@dataclasses.dataclass
class MinimumOrderValueTable:
    store_code_set_with_movs: Optional[list[shared_minimumordervaluetablestorecodesetwithmov.MinimumOrderValueTableStoreCodeSetWithMov]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCodeSetWithMovs') }})
    
