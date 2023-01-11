import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class V2ServerKeyRestrictions:
    r"""V2ServerKeyRestrictions
    The IP addresses of callers that are allowed to use the key.
    """
    
    allowed_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    
