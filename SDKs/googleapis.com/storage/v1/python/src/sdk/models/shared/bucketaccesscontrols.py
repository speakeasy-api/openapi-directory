import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketaccesscontrol as shared_bucketaccesscontrol


@dataclass_json
@dataclasses.dataclass
class BucketAccessControls:
    r"""BucketAccessControls
    An access-control list.
    """
    
    items: Optional[list[shared_bucketaccesscontrol.BucketAccessControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
