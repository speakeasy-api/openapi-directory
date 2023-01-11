import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link
from ..shared import optional_link as shared_optional_link
from ..shared import batch as shared_batch


@dataclass_json
@dataclasses.dataclass
class ListBatchesResponseBodyPaginationLink:
    r"""ListBatchesResponseBodyPaginationLink
    Helpful links to other pages of results
    """
    
    first: shared_link.Link = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: shared_link.Link = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: shared_optional_link.OptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListBatchesResponseBody:
    r"""ListBatchesResponseBody
    A list batch response body
    """
    
    batches: list[shared_batch.Batch] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batches') }})
    links: ListBatchesResponseBodyPaginationLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
