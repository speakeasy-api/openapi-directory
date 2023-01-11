import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricheaderentry as shared_metricheaderentry
from ..shared import pivotheader as shared_pivotheader


@dataclass_json
@dataclasses.dataclass
class MetricHeader:
    r"""MetricHeader
    The headers for the metrics.
    """
    
    metric_header_entries: Optional[list[shared_metricheaderentry.MetricHeaderEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricHeaderEntries') }})
    pivot_headers: Optional[list[shared_pivotheader.PivotHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotHeaders') }})
    
