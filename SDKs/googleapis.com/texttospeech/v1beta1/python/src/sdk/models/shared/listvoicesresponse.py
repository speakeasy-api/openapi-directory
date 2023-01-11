import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import voice as shared_voice


@dataclass_json
@dataclasses.dataclass
class ListVoicesResponse:
    r"""ListVoicesResponse
    The message returned to the client by the `ListVoices` method.
    """
    
    voices: Optional[list[shared_voice.Voice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voices') }})
    
