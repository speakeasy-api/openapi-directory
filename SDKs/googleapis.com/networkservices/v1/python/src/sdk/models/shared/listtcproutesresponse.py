import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tcproute as shared_tcproute


@dataclass_json
@dataclasses.dataclass
class ListTCPRoutesResponse:
    r"""ListTCPRoutesResponse
    Response returned by the ListTcpRoutes method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tcp_routes: Optional[list[shared_tcproute.TCPRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpRoutes') }})
    
