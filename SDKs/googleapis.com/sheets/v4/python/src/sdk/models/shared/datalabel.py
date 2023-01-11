import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chartdata as shared_chartdata
from ..shared import textformat as shared_textformat

class DataLabelPlacementEnum(str, Enum):
    DATA_LABEL_PLACEMENT_UNSPECIFIED = "DATA_LABEL_PLACEMENT_UNSPECIFIED"
    CENTER = "CENTER"
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    ABOVE = "ABOVE"
    BELOW = "BELOW"
    INSIDE_END = "INSIDE_END"
    INSIDE_BASE = "INSIDE_BASE"
    OUTSIDE_END = "OUTSIDE_END"

class DataLabelTypeEnum(str, Enum):
    DATA_LABEL_TYPE_UNSPECIFIED = "DATA_LABEL_TYPE_UNSPECIFIED"
    NONE = "NONE"
    DATA = "DATA"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclasses.dataclass
class DataLabel:
    r"""DataLabel
    Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
    """
    
    custom_label_data: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabelData') }})
    placement: Optional[DataLabelPlacementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    text_format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    type: Optional[DataLabelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
