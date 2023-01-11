import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uptimecheckip as shared_uptimecheckip


@dataclass_json
@dataclasses.dataclass
class ListUptimeCheckIpsResponse:
    r"""ListUptimeCheckIpsResponse
    The protocol for the ListUptimeCheckIps response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    uptime_check_ips: Optional[list[shared_uptimecheckip.UptimeCheckIP]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uptimeCheckIps') }})
    
