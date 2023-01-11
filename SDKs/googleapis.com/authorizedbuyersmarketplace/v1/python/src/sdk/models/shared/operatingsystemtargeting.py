import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criteriatargeting as shared_criteriatargeting


@dataclass_json
@dataclasses.dataclass
class OperatingSystemTargeting:
    r"""OperatingSystemTargeting
    Represents targeting information for operating systems.
    """
    
    operating_system_criteria: Optional[shared_criteriatargeting.CriteriaTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemCriteria') }})
    operating_system_version_criteria: Optional[shared_criteriatargeting.CriteriaTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemVersionCriteria') }})
    
