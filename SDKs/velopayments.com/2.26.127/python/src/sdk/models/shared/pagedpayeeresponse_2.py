import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpayeelistresponse_2 as shared_getpayeelistresponse_2


@dataclass_json
@dataclasses.dataclass
class PagedPayeeResponse2:
    r"""PagedPayeeResponse2
    List Payees Response Object
    """
    
    content: Optional[list[shared_getpayeelistresponse_2.GetPayeeListResponse2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    summary: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
