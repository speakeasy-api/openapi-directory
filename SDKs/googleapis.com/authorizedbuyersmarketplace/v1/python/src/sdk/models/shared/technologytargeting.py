import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criteriatargeting as shared_criteriatargeting
from ..shared import operatingsystemtargeting as shared_operatingsystemtargeting


@dataclass_json
@dataclasses.dataclass
class TechnologyTargeting:
    r"""TechnologyTargeting
    Represents targeting about various types of technology.
    """
    
    device_capability_targeting: Optional[shared_criteriatargeting.CriteriaTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCapabilityTargeting') }})
    device_category_targeting: Optional[shared_criteriatargeting.CriteriaTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCategoryTargeting') }})
    operating_system_targeting: Optional[shared_operatingsystemtargeting.OperatingSystemTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemTargeting') }})
    
