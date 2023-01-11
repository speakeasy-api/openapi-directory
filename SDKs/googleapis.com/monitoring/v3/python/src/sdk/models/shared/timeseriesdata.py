import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import labelvalue as shared_labelvalue
from ..shared import pointdata as shared_pointdata


@dataclass_json
@dataclasses.dataclass
class TimeSeriesData:
    r"""TimeSeriesData
    Represents the values of a time series associated with a TimeSeriesDescriptor.
    """
    
    label_values: Optional[list[shared_labelvalue.LabelValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelValues') }})
    point_data: Optional[list[shared_pointdata.PointData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointData') }})
    
