import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datarange as shared_datarange


@dataclass_json
@dataclasses.dataclass
class RunQueryRequest:
    r"""RunQueryRequest
    Request to run a stored query to generate a report.
    """
    
    data_range: Optional[shared_datarange.DataRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRange') }})
    
