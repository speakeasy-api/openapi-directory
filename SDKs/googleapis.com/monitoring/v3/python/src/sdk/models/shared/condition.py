import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricabsence as shared_metricabsence
from ..shared import logmatch as shared_logmatch
from ..shared import monitoringquerylanguagecondition as shared_monitoringquerylanguagecondition
from ..shared import metricthreshold as shared_metricthreshold


@dataclass_json
@dataclasses.dataclass
class Condition:
    r"""Condition
    A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
    """
    
    condition_absent: Optional[shared_metricabsence.MetricAbsence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionAbsent') }})
    condition_matched_log: Optional[shared_logmatch.LogMatch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionMatchedLog') }})
    condition_monitoring_query_language: Optional[shared_monitoringquerylanguagecondition.MonitoringQueryLanguageCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionMonitoringQueryLanguage') }})
    condition_threshold: Optional[shared_metricthreshold.MetricThreshold] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionThreshold') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
