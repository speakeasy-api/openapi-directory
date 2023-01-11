import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customviewabilitymetricconfiguration as shared_customviewabilitymetricconfiguration


@dataclass_json
@dataclasses.dataclass
class CustomViewabilityMetric:
    r"""CustomViewabilityMetric
    Custom Viewability Metric
    """
    
    configuration: Optional[shared_customviewabilitymetricconfiguration.CustomViewabilityMetricConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
