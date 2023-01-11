import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operatingsystemversion as shared_operatingsystemversion


@dataclass_json
@dataclasses.dataclass
class OperatingSystemVersionsListResponse:
    r"""OperatingSystemVersionsListResponse
    Operating System Version List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    operating_system_versions: Optional[list[shared_operatingsystemversion.OperatingSystemVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemVersions') }})
    
