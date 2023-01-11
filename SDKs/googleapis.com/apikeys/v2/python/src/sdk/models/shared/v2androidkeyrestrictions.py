import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v2androidapplication as shared_v2androidapplication


@dataclass_json
@dataclasses.dataclass
class V2AndroidKeyRestrictions:
    r"""V2AndroidKeyRestrictions
    The Android apps that are allowed to use the key.
    """
    
    allowed_applications: Optional[list[shared_v2androidapplication.V2AndroidApplication]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedApplications') }})
    
