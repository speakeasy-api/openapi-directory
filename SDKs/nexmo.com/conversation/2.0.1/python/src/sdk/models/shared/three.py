import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ThreeContentTypeEnum(str, Enum):
    AUDIO_L16_RATE_EQUAL_8000 = "audio/l16;rate=8000"
    AUDIO_L16_RATE_EQUAL_16000 = "audio/l16;rate=16000"


@dataclass_json
@dataclasses.dataclass
class ThreeHeaders:
    r"""ThreeHeaders
    Details of the Websocket you want to connect to
    """
    
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    

@dataclass_json
@dataclasses.dataclass
class Three:
    r"""Three
    Connect to a Websocket
    """
    
    content_type: ThreeContentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content-type') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    headers: Optional[ThreeHeaders] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
