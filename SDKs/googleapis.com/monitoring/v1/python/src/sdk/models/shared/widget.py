import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alertchart as shared_alertchart
from ..shared import collapsiblegroup as shared_collapsiblegroup
from ..shared import logspanel as shared_logspanel
from ..shared import scorecard as shared_scorecard
from ..shared import text as shared_text
from ..shared import timeseriestable as shared_timeseriestable
from ..shared import xychart as shared_xychart


@dataclass_json
@dataclasses.dataclass
class Widget:
    r"""Widget
    Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
    """
    
    alert_chart: Optional[shared_alertchart.AlertChart] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertChart') }})
    blank: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blank') }})
    collapsible_group: Optional[shared_collapsiblegroup.CollapsibleGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collapsibleGroup') }})
    logs_panel: Optional[shared_logspanel.LogsPanel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsPanel') }})
    scorecard: Optional[shared_scorecard.Scorecard] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scorecard') }})
    text: Optional[shared_text.Text] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    time_series_table: Optional[shared_timeseriestable.TimeSeriesTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesTable') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    xy_chart: Optional[shared_xychart.XyChart] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xyChart') }})
    
