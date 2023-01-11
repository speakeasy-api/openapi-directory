import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paginglinksmeta as shared_paginglinksmeta


@dataclass_json
@dataclasses.dataclass
class PagingMetaPaging:
    links: Optional[shared_paginglinksmeta.PagingLinksMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclasses.dataclass
class PagingMeta:
    paging: Optional[PagingMetaPaging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paging') }})
    
