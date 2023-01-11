import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import urlchannel as shared_urlchannel


@dataclass_json
@dataclasses.dataclass
class ListURLChannelsResponse:
    r"""ListURLChannelsResponse
    Response definition for the url channels list rpc.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    url_channels: Optional[list[shared_urlchannel.URLChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlChannels') }})
    
