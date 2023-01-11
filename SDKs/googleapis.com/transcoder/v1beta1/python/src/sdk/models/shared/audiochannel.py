import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiochannelinput as shared_audiochannelinput


@dataclass_json
@dataclasses.dataclass
class AudioChannel:
    r"""AudioChannel
    The audio channel.
    """
    
    inputs: Optional[list[shared_audiochannelinput.AudioChannelInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    
