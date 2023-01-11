import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiochannel as shared_audiochannel


@dataclass_json
@dataclasses.dataclass
class AudioAtom:
    r"""AudioAtom
    The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
    """
    
    channels: Optional[list[shared_audiochannel.AudioChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
