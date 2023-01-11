import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpayeelistresponse as shared_getpayeelistresponse


@dataclass_json
@dataclasses.dataclass
class PagedPayeeResponse:
    r"""PagedPayeeResponse
    List Payees Response Object
    """
    
    content: Optional[list[shared_getpayeelistresponse.GetPayeeListResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    summary: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
