import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import estimateddiameter as shared_estimateddiameter


@dataclass_json
@dataclasses.dataclass
class EstimatedDiameterContainer:
    feet: Optional[shared_estimateddiameter.EstimatedDiameter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feet') }})
    kilometers: Optional[shared_estimateddiameter.EstimatedDiameter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kilometers') }})
    meters: Optional[shared_estimateddiameter.EstimatedDiameter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meters') }})
    miles: Optional[shared_estimateddiameter.EstimatedDiameter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles') }})
    
