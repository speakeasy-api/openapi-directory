import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceaccountresponsev2 as shared_sourceaccountresponsev2


@dataclass_json
@dataclasses.dataclass
class ListSourceAccountResponseV2:
    r"""ListSourceAccountResponseV2
    List Source Accounts Response Object
    """
    
    content: Optional[list[shared_sourceaccountresponsev2.SourceAccountResponseV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
