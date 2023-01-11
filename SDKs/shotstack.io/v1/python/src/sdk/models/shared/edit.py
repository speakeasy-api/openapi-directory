import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import output as shared_output
from ..shared import timeline as shared_timeline

class EditDiskEnum(str, Enum):
    LOCAL = "local"
    MOUNT = "mount"


@dataclass_json
@dataclasses.dataclass
class Edit:
    r"""Edit
    An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
    """
    
    output: shared_output.Output = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    timeline: shared_timeline.Timeline = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline') }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback') }})
    disk: Optional[EditDiskEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    
