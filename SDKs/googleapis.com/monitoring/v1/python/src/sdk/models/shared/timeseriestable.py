import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnsettings as shared_columnsettings
from ..shared import tabledataset as shared_tabledataset

class TimeSeriesTableMetricVisualizationEnum(str, Enum):
    METRIC_VISUALIZATION_UNSPECIFIED = "METRIC_VISUALIZATION_UNSPECIFIED"
    NUMBER = "NUMBER"
    BAR = "BAR"


@dataclass_json
@dataclasses.dataclass
class TimeSeriesTable:
    r"""TimeSeriesTable
    A table that displays time series data.
    """
    
    column_settings: Optional[list[shared_columnsettings.ColumnSettings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSettings') }})
    data_sets: Optional[list[shared_tabledataset.TableDataSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSets') }})
    metric_visualization: Optional[TimeSeriesTableMetricVisualizationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricVisualization') }})
    
