import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import zero as shared_zero
from ..shared import two as shared_two
from ..shared import three as shared_three
from ..shared import four as shared_four
from ..shared import channel_type_enum as shared_channel_type_enum


@dataclass_json
@dataclasses.dataclass
class ChannelFrom1:
    r"""ChannelFrom1
    Connect to an App User
    """
    
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelFrom2:
    r"""ChannelFrom2
    Connect to a Phone (PSTN) number
    """
    
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelFrom3:
    r"""ChannelFrom3
    Connect to a SIP Endpoint
    """
    
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
class ChannelFrom4ContentTypeEnum(str, Enum):
    AUDIO_L16_RATE_EQUAL_8000 = "audio/l16;rate=8000"
    AUDIO_L16_RATE_EQUAL_16000 = "audio/l16;rate=16000"


@dataclass_json
@dataclasses.dataclass
class ChannelFrom4Headers:
    r"""ChannelFrom4Headers
    Details of the Websocket you want to connect to
    """
    
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelFrom4:
    r"""ChannelFrom4
    Connect to a Websocket
    """
    
    content_type: ChannelFrom4ContentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content-type') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    headers: Optional[ChannelFrom4Headers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelFrom5:
    r"""ChannelFrom5
    Connect to a VBC extension
    """
    
    extension: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelTo2:
    r"""ChannelTo2
    Connect to a Phone (PSTN) number
    """
    
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    dtmf_answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtmfAnswer') }})
    

@dataclass_json
@dataclasses.dataclass
class Channel:
    r"""Channel
    A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
    """
    
    from_: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    leg_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg_id') }})
    leg_ids: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg_ids') }})
    to: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    type: Optional[shared_channel_type_enum.ChannelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
