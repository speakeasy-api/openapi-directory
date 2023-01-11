import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import forwardpaging as shared_forwardpaging
from ..shared import domain as shared_domain


@dataclass_json
@dataclasses.dataclass
class CollectionResponseWithTotalDomainForwardPaging:
    results: list[shared_domain.Domain] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    paging: Optional[shared_forwardpaging.ForwardPaging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paging') }})
    
