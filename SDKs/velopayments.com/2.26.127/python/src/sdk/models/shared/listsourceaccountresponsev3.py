import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourceaccountresponsev3 as shared_sourceaccountresponsev3


@dataclass_json
@dataclasses.dataclass
class ListSourceAccountResponseV3:
    r"""ListSourceAccountResponseV3
    List Source Accounts Response Object
    """
    
    content: Optional[list[shared_sourceaccountresponsev3.SourceAccountResponseV3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
