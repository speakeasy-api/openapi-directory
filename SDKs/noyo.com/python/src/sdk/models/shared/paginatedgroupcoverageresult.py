import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupcoverageresult as shared_groupcoverageresult


@dataclass_json
@dataclasses.dataclass
class PaginatedGroupCoverageResultMeta:
    r"""PaginatedGroupCoverageResultMeta
    Metadata associated with the response data
    """
    
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    page_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_num') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginatedGroupCoverageResult:
    meta: PaginatedGroupCoverageResultMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    response: list[shared_groupcoverageresult.GroupCoverageResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
