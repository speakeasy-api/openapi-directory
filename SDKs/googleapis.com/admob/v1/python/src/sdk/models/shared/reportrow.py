import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportrowdimensionvalue as shared_reportrowdimensionvalue
from ..shared import reportrowmetricvalue as shared_reportrowmetricvalue


@dataclass_json
@dataclasses.dataclass
class ReportRow:
    r"""ReportRow
    A row of the returning report.
    """
    
    dimension_values: Optional[dict[str, shared_reportrowdimensionvalue.ReportRowDimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    metric_values: Optional[dict[str, shared_reportrowmetricvalue.ReportRowMetricValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
