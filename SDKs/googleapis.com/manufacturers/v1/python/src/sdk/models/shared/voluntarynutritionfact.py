import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import floatunit as shared_floatunit


@dataclass_json
@dataclasses.dataclass
class VoluntaryNutritionFact:
    r"""VoluntaryNutritionFact
    Voluntary Nutrition Facts.
    """
    
    daily_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyPercentage') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[shared_floatunit.FloatUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
