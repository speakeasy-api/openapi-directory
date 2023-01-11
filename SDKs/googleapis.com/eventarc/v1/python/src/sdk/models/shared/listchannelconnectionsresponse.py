import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelconnection as shared_channelconnection


@dataclass_json
@dataclasses.dataclass
class ListChannelConnectionsResponse:
    r"""ListChannelConnectionsResponse
    The response message for the `ListChannelConnections` method.
    """
    
    channel_connections: Optional[list[shared_channelconnection.ChannelConnection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelConnections') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
