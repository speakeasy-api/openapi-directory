import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datacenterconnector as shared_datacenterconnector


@dataclass_json
@dataclasses.dataclass
class ListDatacenterConnectorsResponse:
    r"""ListDatacenterConnectorsResponse
    Response message for 'ListDatacenterConnectors' request.
    """
    
    datacenter_connectors: Optional[list[shared_datacenterconnector.DatacenterConnector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenterConnectors') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
