import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status


@dataclass_json
@dataclasses.dataclass
class AppDevExperienceFeatureState:
    r"""AppDevExperienceFeatureState
    State for App Dev Exp Feature.
    """
    
    networking_install_succeeded: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkingInstallSucceeded') }})
    
