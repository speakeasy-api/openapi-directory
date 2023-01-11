import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactresult as shared_contactresult


@dataclass_json
@dataclasses.dataclass
class PaginatedContactResultMeta:
    r"""PaginatedContactResultMeta
    Metadata associated with the response data
    """
    
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    page_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_num') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginatedContactResult:
    meta: PaginatedContactResultMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    response: list[shared_contactresult.ContactResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
