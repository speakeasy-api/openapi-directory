import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamegenderin as shared_firstlastnamegenderin


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNameGenderIn:
    personal_names: Optional[list[shared_firstlastnamegenderin.FirstLastNameGenderIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
