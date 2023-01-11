import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Prediction:
    prediction: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prediction') }})
    probability: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('probability') }})
    
