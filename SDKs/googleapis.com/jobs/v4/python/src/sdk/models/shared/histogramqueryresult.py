import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HistogramQueryResult:
    r"""HistogramQueryResult
    Histogram result that matches HistogramQuery specified in searches.
    """
    
    histogram: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogram') }})
    histogram_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramQuery') }})
    
