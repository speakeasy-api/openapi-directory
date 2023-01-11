import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import uptimecheckconfig as shared_uptimecheckconfig


@dataclass_json
@dataclasses.dataclass
class ListUptimeCheckConfigsResponse:
    r"""ListUptimeCheckConfigsResponse
    The protocol for the ListUptimeCheckConfigs response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    uptime_check_configs: Optional[list[shared_uptimecheckconfig.UptimeCheckConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uptimeCheckConfigs') }})
    
