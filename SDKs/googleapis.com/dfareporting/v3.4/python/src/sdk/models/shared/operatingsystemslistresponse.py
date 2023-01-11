import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operatingsystem as shared_operatingsystem


@dataclass_json
@dataclasses.dataclass
class OperatingSystemsListResponse:
    r"""OperatingSystemsListResponse
    Operating System List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    operating_systems: Optional[list[shared_operatingsystem.OperatingSystem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystems') }})
    
