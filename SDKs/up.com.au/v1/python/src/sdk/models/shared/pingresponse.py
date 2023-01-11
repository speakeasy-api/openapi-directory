import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PingResponseMeta:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status_emoji: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusEmoji') }})
    

@dataclass_json
@dataclasses.dataclass
class PingResponse:
    r"""PingResponse
    Basic ping response to verify authentication.
    
    """
    
    meta: PingResponseMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
