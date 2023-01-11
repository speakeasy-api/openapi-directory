import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import pointstyle as shared_pointstyle


@dataclass_json
@dataclasses.dataclass
class BasicSeriesDataPointStyleOverride:
    r"""BasicSeriesDataPointStyleOverride
    Style override settings for a single series data point.
    """
    
    color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorStyle') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    point_style: Optional[shared_pointstyle.PointStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointStyle') }})
    
