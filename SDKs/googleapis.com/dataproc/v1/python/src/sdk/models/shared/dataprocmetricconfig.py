import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metric as shared_metric


@dataclass_json
@dataclasses.dataclass
class DataprocMetricConfig:
    r"""DataprocMetricConfig
    Dataproc metric config.
    """
    
    metrics: Optional[list[shared_metric.Metric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
