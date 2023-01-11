import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceaccountresponse as shared_sourceaccountresponse


@dataclass_json
@dataclasses.dataclass
class ListSourceAccountResponse:
    r"""ListSourceAccountResponse
    List Source Accounts Response Object
    """
    
    content: Optional[list[shared_sourceaccountresponse.SourceAccountResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
