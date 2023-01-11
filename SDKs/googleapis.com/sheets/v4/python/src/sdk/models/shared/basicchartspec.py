import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicchartaxis as shared_basicchartaxis
from ..shared import basicchartdomain as shared_basicchartdomain
from ..shared import basicchartseries as shared_basicchartseries
from ..shared import datalabel as shared_datalabel

class BasicChartSpecChartTypeEnum(str, Enum):
    BASIC_CHART_TYPE_UNSPECIFIED = "BASIC_CHART_TYPE_UNSPECIFIED"
    BAR = "BAR"
    LINE = "LINE"
    AREA = "AREA"
    COLUMN = "COLUMN"
    SCATTER = "SCATTER"
    COMBO = "COMBO"
    STEPPED_AREA = "STEPPED_AREA"

class BasicChartSpecCompareModeEnum(str, Enum):
    BASIC_CHART_COMPARE_MODE_UNSPECIFIED = "BASIC_CHART_COMPARE_MODE_UNSPECIFIED"
    DATUM = "DATUM"
    CATEGORY = "CATEGORY"

class BasicChartSpecLegendPositionEnum(str, Enum):
    BASIC_CHART_LEGEND_POSITION_UNSPECIFIED = "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED"
    BOTTOM_LEGEND = "BOTTOM_LEGEND"
    LEFT_LEGEND = "LEFT_LEGEND"
    RIGHT_LEGEND = "RIGHT_LEGEND"
    TOP_LEGEND = "TOP_LEGEND"
    NO_LEGEND = "NO_LEGEND"

class BasicChartSpecStackedTypeEnum(str, Enum):
    BASIC_CHART_STACKED_TYPE_UNSPECIFIED = "BASIC_CHART_STACKED_TYPE_UNSPECIFIED"
    NOT_STACKED = "NOT_STACKED"
    STACKED = "STACKED"
    PERCENT_STACKED = "PERCENT_STACKED"


@dataclass_json
@dataclasses.dataclass
class BasicChartSpec:
    r"""BasicChartSpec
    The specification for a basic chart. See BasicChartType for the list of charts this supports.
    """
    
    axis: Optional[list[shared_basicchartaxis.BasicChartAxis]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('axis') }})
    chart_type: Optional[BasicChartSpecChartTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartType') }})
    compare_mode: Optional[BasicChartSpecCompareModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compareMode') }})
    domains: Optional[list[shared_basicchartdomain.BasicChartDomain]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    header_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerCount') }})
    interpolate_nulls: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpolateNulls') }})
    legend_position: Optional[BasicChartSpecLegendPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legendPosition') }})
    line_smoothing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineSmoothing') }})
    series: Optional[list[shared_basicchartseries.BasicChartSeries]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    stacked_type: Optional[BasicChartSpecStackedTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackedType') }})
    three_dimensional: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threeDimensional') }})
    total_data_label: Optional[shared_datalabel.DataLabel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDataLabel') }})
    
