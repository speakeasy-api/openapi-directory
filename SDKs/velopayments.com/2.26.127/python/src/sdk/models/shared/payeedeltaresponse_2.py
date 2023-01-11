import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payeedelta_2 as shared_payeedelta_2


@dataclass_json
@dataclasses.dataclass
class PayeeDeltaResponse2:
    r"""PayeeDeltaResponse2
    List Payee Changes Response Object
    """
    
    content: Optional[list[shared_payeedelta_2.PayeeDelta2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
