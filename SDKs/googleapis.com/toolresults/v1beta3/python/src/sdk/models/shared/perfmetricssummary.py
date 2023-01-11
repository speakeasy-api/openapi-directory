import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appstarttime as shared_appstarttime
from ..shared import graphicsstats as shared_graphicsstats
from ..shared import perfenvironment as shared_perfenvironment

class PerfMetricsSummaryPerfMetricsEnum(str, Enum):
    PERF_METRIC_TYPE_UNSPECIFIED = "perfMetricTypeUnspecified"
    MEMORY = "memory"
    CPU = "cpu"
    NETWORK = "network"
    GRAPHICS = "graphics"


@dataclass_json
@dataclasses.dataclass
class PerfMetricsSummary:
    r"""PerfMetricsSummary
    A summary of perf metrics collected and performance environment info
    """
    
    app_start_time: Optional[shared_appstarttime.AppStartTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appStartTime') }})
    execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    graphics_stats: Optional[shared_graphicsstats.GraphicsStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphicsStats') }})
    history_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    perf_environment: Optional[shared_perfenvironment.PerfEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfEnvironment') }})
    perf_metrics: Optional[list[PerfMetricsSummaryPerfMetricsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfMetrics') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    step_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    
