import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tabledisplayoptions as shared_tabledisplayoptions
from ..shared import timeseriesquery as shared_timeseriesquery


@dataclass_json
@dataclasses.dataclass
class TableDataSet:
    r"""TableDataSet
    Groups a time series query definition with table options.
    """
    
    min_alignment_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAlignmentPeriod') }})
    table_display_options: Optional[shared_tabledisplayoptions.TableDisplayOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableDisplayOptions') }})
    table_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableTemplate') }})
    time_series_query: Optional[shared_timeseriesquery.TimeSeriesQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesQuery') }})
    
