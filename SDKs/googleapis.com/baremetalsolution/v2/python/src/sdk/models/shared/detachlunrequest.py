import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DetachLunRequest:
    r"""DetachLunRequest
    Message for detach specific LUN from an Instance.
    """
    
    lun: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lun') }})
    skip_reboot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipReboot') }})
    
