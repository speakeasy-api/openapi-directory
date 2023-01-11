import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chartdata as shared_chartdata
from ..shared import treemapchartcolorscale as shared_treemapchartcolorscale
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import textformat as shared_textformat


@dataclass_json
@dataclasses.dataclass
class TreemapChartSpec:
    r"""TreemapChartSpec
    A Treemap chart.
    """
    
    color_data: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorData') }})
    color_scale: Optional[shared_treemapchartcolorscale.TreemapChartColorScale] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorScale') }})
    header_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerColor') }})
    header_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerColorStyle') }})
    hide_tooltips: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideTooltips') }})
    hinted_levels: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hintedLevels') }})
    labels: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    levels: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('levels') }})
    max_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    parent_labels: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLabels') }})
    size_data: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeData') }})
    text_format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    
