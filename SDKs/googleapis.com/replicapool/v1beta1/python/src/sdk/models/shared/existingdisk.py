import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import diskattachment as shared_diskattachment


@dataclass_json
@dataclasses.dataclass
class ExistingDisk:
    r"""ExistingDisk
    A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
    """
    
    attachment: Optional[shared_diskattachment.DiskAttachment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
