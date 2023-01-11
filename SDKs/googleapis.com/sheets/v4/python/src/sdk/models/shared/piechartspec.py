import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chartdata as shared_chartdata

class PieChartSpecLegendPositionEnum(str, Enum):
    PIE_CHART_LEGEND_POSITION_UNSPECIFIED = "PIE_CHART_LEGEND_POSITION_UNSPECIFIED"
    BOTTOM_LEGEND = "BOTTOM_LEGEND"
    LEFT_LEGEND = "LEFT_LEGEND"
    RIGHT_LEGEND = "RIGHT_LEGEND"
    TOP_LEGEND = "TOP_LEGEND"
    NO_LEGEND = "NO_LEGEND"
    LABELED_LEGEND = "LABELED_LEGEND"


@dataclass_json
@dataclasses.dataclass
class PieChartSpec:
    r"""PieChartSpec
    A pie chart.
    """
    
    domain: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    legend_position: Optional[PieChartSpecLegendPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legendPosition') }})
    pie_hole: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pieHole') }})
    series: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    three_dimensional: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threeDimensional') }})
    
