import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import datalabel as shared_datalabel
from ..shared import linestyle as shared_linestyle
from ..shared import pointstyle as shared_pointstyle
from ..shared import chartdata as shared_chartdata
from ..shared import basicseriesdatapointstyleoverride as shared_basicseriesdatapointstyleoverride

class BasicChartSeriesTargetAxisEnum(str, Enum):
    BASIC_CHART_AXIS_POSITION_UNSPECIFIED = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
    BOTTOM_AXIS = "BOTTOM_AXIS"
    LEFT_AXIS = "LEFT_AXIS"
    RIGHT_AXIS = "RIGHT_AXIS"

class BasicChartSeriesTypeEnum(str, Enum):
    BASIC_CHART_TYPE_UNSPECIFIED = "BASIC_CHART_TYPE_UNSPECIFIED"
    BAR = "BAR"
    LINE = "LINE"
    AREA = "AREA"
    COLUMN = "COLUMN"
    SCATTER = "SCATTER"
    COMBO = "COMBO"
    STEPPED_AREA = "STEPPED_AREA"


@dataclass_json
@dataclasses.dataclass
class BasicChartSeries:
    r"""BasicChartSeries
    A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the \"Open Price\", \"High Price\", \"Low Price\" and \"Close Price\".
    """
    
    color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorStyle') }})
    data_label: Optional[shared_datalabel.DataLabel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLabel') }})
    line_style: Optional[shared_linestyle.LineStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineStyle') }})
    point_style: Optional[shared_pointstyle.PointStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointStyle') }})
    series: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    style_overrides: Optional[list[shared_basicseriesdatapointstyleoverride.BasicSeriesDataPointStyleOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('styleOverrides') }})
    target_axis: Optional[BasicChartSeriesTargetAxisEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAxis') }})
    type: Optional[BasicChartSeriesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
