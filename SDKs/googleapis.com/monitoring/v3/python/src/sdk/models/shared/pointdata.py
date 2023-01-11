import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeinterval as shared_timeinterval
from ..shared import typedvalue as shared_typedvalue


@dataclass_json
@dataclasses.dataclass
class PointData:
    r"""PointData
    A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object.
    """
    
    time_interval: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeInterval') }})
    values: Optional[list[shared_typedvalue.TypedValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
