import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import chartdata as shared_chartdata
from ..shared import textformat as shared_textformat

class BubbleChartSpecLegendPositionEnum(str, Enum):
    BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED = "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED"
    BOTTOM_LEGEND = "BOTTOM_LEGEND"
    LEFT_LEGEND = "LEFT_LEGEND"
    RIGHT_LEGEND = "RIGHT_LEGEND"
    TOP_LEGEND = "TOP_LEGEND"
    NO_LEGEND = "NO_LEGEND"
    INSIDE_LEGEND = "INSIDE_LEGEND"


@dataclass_json
@dataclasses.dataclass
class BubbleChartSpec:
    r"""BubbleChartSpec
    A bubble chart.
    """
    
    bubble_border_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleBorderColor') }})
    bubble_border_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleBorderColorStyle') }})
    bubble_labels: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleLabels') }})
    bubble_max_radius_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleMaxRadiusSize') }})
    bubble_min_radius_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleMinRadiusSize') }})
    bubble_opacity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleOpacity') }})
    bubble_sizes: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleSizes') }})
    bubble_text_style: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleTextStyle') }})
    domain: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    group_ids: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupIds') }})
    legend_position: Optional[BubbleChartSpecLegendPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legendPosition') }})
    series: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    
