import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationdocumentresult as shared_applicationdocumentresult


@dataclass_json
@dataclasses.dataclass
class PaginatedApplicationDocumentResultMeta:
    r"""PaginatedApplicationDocumentResultMeta
    Metadata associated with the response data
    """
    
    offset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    page_num: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_num') }})
    page_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    total_records: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_records') }})
    

@dataclass_json
@dataclasses.dataclass
class PaginatedApplicationDocumentResult:
    meta: PaginatedApplicationDocumentResultMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    response: list[shared_applicationdocumentresult.ApplicationDocumentResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
