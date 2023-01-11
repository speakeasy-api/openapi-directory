import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import textformat as shared_textformat
from ..shared import textposition as shared_textposition
from ..shared import chartaxisviewwindowoptions as shared_chartaxisviewwindowoptions

class BasicChartAxisPositionEnum(str, Enum):
    BASIC_CHART_AXIS_POSITION_UNSPECIFIED = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
    BOTTOM_AXIS = "BOTTOM_AXIS"
    LEFT_AXIS = "LEFT_AXIS"
    RIGHT_AXIS = "RIGHT_AXIS"


@dataclass_json
@dataclasses.dataclass
class BasicChartAxis:
    r"""BasicChartAxis
    An axis of the chart. A chart may not have more than one axis per axis position.
    """
    
    format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    position: Optional[BasicChartAxisPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_text_position: Optional[shared_textposition.TextPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleTextPosition') }})
    view_window_options: Optional[shared_chartaxisviewwindowoptions.ChartAxisViewWindowOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewWindowOptions') }})
    
