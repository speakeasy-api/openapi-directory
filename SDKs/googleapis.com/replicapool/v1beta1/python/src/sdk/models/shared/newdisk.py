import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import diskattachment as shared_diskattachment
from ..shared import newdiskinitializeparams as shared_newdiskinitializeparams


@dataclass_json
@dataclasses.dataclass
class NewDisk:
    r"""NewDisk
    A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
    """
    
    attachment: Optional[shared_diskattachment.DiskAttachment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    auto_delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDelete') }})
    boot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boot') }})
    initialize_params: Optional[shared_newdiskinitializeparams.NewDiskInitializeParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializeParams') }})
    
