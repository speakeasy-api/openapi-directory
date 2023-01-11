import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterpair as shared_filterpair
from ..shared import options as shared_options

class ParametersTypeEnum(str, Enum):
    REPORT_TYPE_UNSPECIFIED = "REPORT_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    INVENTORY_AVAILABILITY = "INVENTORY_AVAILABILITY"
    AUDIENCE_COMPOSITION = "AUDIENCE_COMPOSITION"
    FLOODLIGHT = "FLOODLIGHT"
    YOUTUBE = "YOUTUBE"
    GRP = "GRP"
    YOUTUBE_PROGRAMMATIC_GUARANTEED = "YOUTUBE_PROGRAMMATIC_GUARANTEED"
    REACH = "REACH"
    UNIQUE_REACH_AUDIENCE = "UNIQUE_REACH_AUDIENCE"
    FULL_PATH = "FULL_PATH"
    PATH_ATTRIBUTION = "PATH_ATTRIBUTION"


@dataclass_json
@dataclasses.dataclass
class Parameters:
    r"""Parameters
    Parameters of a query or report.
    """
    
    filters: Optional[list[shared_filterpair.FilterPair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    group_bys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupBys') }})
    metrics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    options: Optional[shared_options.Options] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    type: Optional[ParametersTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
