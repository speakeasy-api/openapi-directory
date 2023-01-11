import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricheaderentry as shared_metricheaderentry


@dataclass_json
@dataclasses.dataclass
class PivotHeaderEntry:
    r"""PivotHeaderEntry
    The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.
    """
    
    dimension_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionNames') }})
    dimension_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    metric: Optional[shared_metricheaderentry.MetricHeaderEntry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    
