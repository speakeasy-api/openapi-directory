import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transittabletransittimerow as shared_transittabletransittimerow


@dataclass_json
@dataclasses.dataclass
class TransitTable:
    postal_code_group_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeGroupNames') }})
    rows: Optional[list[shared_transittabletransittimerow.TransitTableTransitTimeRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    transit_time_labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitTimeLabels') }})
    
