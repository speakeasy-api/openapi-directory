import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleHomeEnterpriseSdmV1Structure:
    r"""GoogleHomeEnterpriseSdmV1Structure
    Structure resource represents an instance of enterprise managed home or hotel room.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    traits: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traits') }})
    
