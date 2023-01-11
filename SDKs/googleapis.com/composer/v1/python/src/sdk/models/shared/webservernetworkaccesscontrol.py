import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowediprange as shared_allowediprange


@dataclass_json
@dataclasses.dataclass
class WebServerNetworkAccessControl:
    r"""WebServerNetworkAccessControl
    Network-level access control policy for the Airflow web server.
    """
    
    allowed_ip_ranges: Optional[list[shared_allowediprange.AllowedIPRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIpRanges') }})
    
