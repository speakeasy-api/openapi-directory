import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objectaccesscontrol as shared_objectaccesscontrol


@dataclass_json
@dataclasses.dataclass
class ObjectAccessControls:
    r"""ObjectAccessControls
    An access-control list.
    """
    
    items: Optional[list[shared_objectaccesscontrol.ObjectAccessControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
