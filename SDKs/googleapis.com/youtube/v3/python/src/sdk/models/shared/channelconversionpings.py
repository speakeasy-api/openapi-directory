import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelconversionping as shared_channelconversionping


@dataclass_json
@dataclasses.dataclass
class ChannelConversionPings:
    r"""ChannelConversionPings
    The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
    """
    
    pings: Optional[list[shared_channelconversionping.ChannelConversionPing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pings') }})
    
