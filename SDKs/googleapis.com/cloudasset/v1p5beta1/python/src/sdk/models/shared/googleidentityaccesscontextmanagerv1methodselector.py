import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityAccesscontextmanagerV1MethodSelector:
    r"""GoogleIdentityAccesscontextmanagerV1MethodSelector
    An allowed method or permission of a service specified in ApiOperation.
    """
    
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    permission: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
