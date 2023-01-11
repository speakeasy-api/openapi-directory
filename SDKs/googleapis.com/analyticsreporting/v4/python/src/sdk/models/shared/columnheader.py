import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricheader as shared_metricheader


@dataclass_json
@dataclasses.dataclass
class ColumnHeader:
    r"""ColumnHeader
    Column headers.
    """
    
    dimensions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metric_header: Optional[shared_metricheader.MetricHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricHeader') }})
    
