import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import livingareaaccessibility as shared_livingareaaccessibility
from ..shared import livingareaeating as shared_livingareaeating
from ..shared import livingareafeatures as shared_livingareafeatures
from ..shared import livingarealayout as shared_livingarealayout
from ..shared import livingareasleeping as shared_livingareasleeping


@dataclass_json
@dataclasses.dataclass
class LivingArea:
    r"""LivingArea
    An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
    """
    
    accessibility: Optional[shared_livingareaaccessibility.LivingAreaAccessibility] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibility') }})
    eating: Optional[shared_livingareaeating.LivingAreaEating] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eating') }})
    features: Optional[shared_livingareafeatures.LivingAreaFeatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    layout: Optional[shared_livingarealayout.LivingAreaLayout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    sleeping: Optional[shared_livingareasleeping.LivingAreaSleeping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sleeping') }})
    
