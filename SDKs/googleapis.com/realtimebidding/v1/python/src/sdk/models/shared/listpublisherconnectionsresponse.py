import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publisherconnection as shared_publisherconnection


@dataclass_json
@dataclasses.dataclass
class ListPublisherConnectionsResponse:
    r"""ListPublisherConnectionsResponse
    A response to a request for listing publisher connections.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    publisher_connections: Optional[list[shared_publisherconnection.PublisherConnection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherConnections') }})
    
