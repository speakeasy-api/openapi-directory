import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityAccesscontextmanagerV1IngressSource:
    r"""GoogleIdentityAccesscontextmanagerV1IngressSource
    The source that IngressPolicy authorizes access from.
    """
    
    access_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevel') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
