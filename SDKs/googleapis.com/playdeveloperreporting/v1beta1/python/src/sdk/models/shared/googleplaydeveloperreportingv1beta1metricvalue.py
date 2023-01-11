import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypedecimal as shared_googletypedecimal


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1beta1MetricValue:
    r"""GooglePlayDeveloperReportingV1beta1MetricValue
    Represents the value of a metric.
    """
    
    decimal_value: Optional[shared_googletypedecimal.GoogleTypeDecimal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalValue') }})
    metric: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    
