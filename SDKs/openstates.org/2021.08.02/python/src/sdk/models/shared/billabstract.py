import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BillAbstract:
    abstract: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('abstract') }})
    note: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
