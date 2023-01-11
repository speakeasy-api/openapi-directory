import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paginationmeta as shared_paginationmeta
from ..shared import bill as shared_bill


@dataclass_json
@dataclasses.dataclass
class BillList:
    pagination: shared_paginationmeta.PaginationMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: list[shared_bill.Bill] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
