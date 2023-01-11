import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupapplicationresult as shared_groupapplicationresult


@dataclass_json
@dataclasses.dataclass
class PaginatedGroupApplicationResultMeta:
    r"""PaginatedGroupApplicationResultMeta
    Metadata associated with the response data
    """
    
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    page_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_num') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginatedGroupApplicationResult:
    meta: PaginatedGroupApplicationResultMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    response: list[shared_groupapplicationresult.GroupApplicationResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
