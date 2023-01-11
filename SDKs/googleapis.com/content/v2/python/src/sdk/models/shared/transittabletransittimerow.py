import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transittabletransittimerowtransittimevalue as shared_transittabletransittimerowtransittimevalue


@dataclass_json
@dataclasses.dataclass
class TransitTableTransitTimeRow:
    values: Optional[list[shared_transittabletransittimerowtransittimevalue.TransitTableTransitTimeRowTransitTimeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
