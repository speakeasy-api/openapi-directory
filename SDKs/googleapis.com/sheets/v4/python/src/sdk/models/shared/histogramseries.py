import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import chartdata as shared_chartdata


@dataclass_json
@dataclasses.dataclass
class HistogramSeries:
    r"""HistogramSeries
    A histogram series containing the series color and data.
    """
    
    bar_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barColor') }})
    bar_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barColorStyle') }})
    data: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
