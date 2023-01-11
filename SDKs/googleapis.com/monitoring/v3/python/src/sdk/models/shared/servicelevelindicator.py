import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicsli as shared_basicsli
from ..shared import requestbasedsli as shared_requestbasedsli
from ..shared import windowsbasedsli as shared_windowsbasedsli


@dataclass_json
@dataclasses.dataclass
class ServiceLevelIndicator:
    r"""ServiceLevelIndicator
    A Service-Level Indicator (SLI) describes the \"performance\" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a \"custom\" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries.
    """
    
    basic_sli: Optional[shared_basicsli.BasicSli] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicSli') }})
    request_based: Optional[shared_requestbasedsli.RequestBasedSli] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestBased') }})
    windows_based: Optional[shared_windowsbasedsli.WindowsBasedSli] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsBased') }})
    
