import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customchannel as shared_customchannel


@dataclass_json
@dataclasses.dataclass
class ListCustomChannelsResponse:
    r"""ListCustomChannelsResponse
    Response definition for the custom channel list rpc.
    """
    
    custom_channels: Optional[list[shared_customchannel.CustomChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customChannels') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
