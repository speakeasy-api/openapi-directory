import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1httpslatencyroutinedata as shared_googlechromemanagementv1httpslatencyroutinedata


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1NetworkDiagnosticsReport:
    r"""GoogleChromeManagementV1NetworkDiagnosticsReport
    Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.
    """
    
    https_latency_data: Optional[shared_googlechromemanagementv1httpslatencyroutinedata.GoogleChromeManagementV1HTTPSLatencyRoutineData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpsLatencyData') }})
    report_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    
