import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1betaUserInfo:
    r"""GoogleCloudDiscoveryengineV1betaUserInfo
    Information of an end user.
    """
    
    user_agent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
