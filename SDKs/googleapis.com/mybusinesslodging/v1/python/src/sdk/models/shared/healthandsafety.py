import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import enhancedcleaning as shared_enhancedcleaning
from ..shared import increasedfoodsafety as shared_increasedfoodsafety
from ..shared import minimizedcontact as shared_minimizedcontact
from ..shared import personalprotection as shared_personalprotection
from ..shared import physicaldistancing as shared_physicaldistancing


@dataclass_json
@dataclasses.dataclass
class HealthAndSafety:
    r"""HealthAndSafety
    Health and safety measures implemented by the hotel during COVID-19.
    """
    
    enhanced_cleaning: Optional[shared_enhancedcleaning.EnhancedCleaning] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enhancedCleaning') }})
    increased_food_safety: Optional[shared_increasedfoodsafety.IncreasedFoodSafety] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('increasedFoodSafety') }})
    minimized_contact: Optional[shared_minimizedcontact.MinimizedContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimizedContact') }})
    personal_protection: Optional[shared_personalprotection.PersonalProtection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalProtection') }})
    physical_distancing: Optional[shared_physicaldistancing.PhysicalDistancing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalDistancing') }})
    
