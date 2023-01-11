import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chartoptions as shared_chartoptions
from ..shared import dataset as shared_dataset
from ..shared import threshold as shared_threshold
from ..shared import axis as shared_axis


@dataclass_json
@dataclasses.dataclass
class XyChart:
    r"""XyChart
    A chart that displays data on a 2D (X and Y axes) plane.
    """
    
    chart_options: Optional[shared_chartoptions.ChartOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartOptions') }})
    data_sets: Optional[list[shared_dataset.DataSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSets') }})
    thresholds: Optional[list[shared_threshold.Threshold]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholds') }})
    timeshift_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeshiftDuration') }})
    x_axis: Optional[shared_axis.Axis] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xAxis') }})
    y2_axis: Optional[shared_axis.Axis] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y2Axis') }})
    y_axis: Optional[shared_axis.Axis] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yAxis') }})
    
