import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeinterval as shared_timeinterval


@dataclass_json
@dataclasses.dataclass
class RowDimensions:
    r"""RowDimensions
    A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
    """
    
    publisher_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherIdentifier') }})
    time_interval: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInterval') }})
    
