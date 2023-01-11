import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkusage as shared_networkusage


@dataclass_json
@dataclasses.dataclass
class ListNetworkUsageResponse:
    r"""ListNetworkUsageResponse
    Response with Networks with IPs
    """
    
    networks: Optional[list[shared_networkusage.NetworkUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    
