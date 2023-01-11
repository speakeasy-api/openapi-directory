import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspolicy as shared_accesspolicy


@dataclass_json
@dataclasses.dataclass
class VideoMonetizationDetails:
    r"""VideoMonetizationDetails
    Details about monetization of a YouTube Video.
    """
    
    access: Optional[shared_accesspolicy.AccessPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    
