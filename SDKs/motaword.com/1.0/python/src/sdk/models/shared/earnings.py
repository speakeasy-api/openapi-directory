import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import earningwithtqs as shared_earningwithtqs


@dataclass_json
@dataclasses.dataclass
class Earnings:
    completed: Optional[list[shared_earningwithtqs.EarningWithTqs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed') }})
    ongoing: Optional[list[shared_earningwithtqs.EarningWithTqs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ongoing') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
