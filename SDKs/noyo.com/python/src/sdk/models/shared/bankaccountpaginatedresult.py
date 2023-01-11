import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bankaccountresult as shared_bankaccountresult


@dataclass_json
@dataclasses.dataclass
class BankAccountPaginatedResultMeta:
    r"""BankAccountPaginatedResultMeta
    Metadata associated with the response data
    """
    
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    page_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_num') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclass_json
@dataclasses.dataclass
class BankAccountPaginatedResult:
    meta: BankAccountPaginatedResultMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    response: list[shared_bankaccountresult.BankAccountResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
