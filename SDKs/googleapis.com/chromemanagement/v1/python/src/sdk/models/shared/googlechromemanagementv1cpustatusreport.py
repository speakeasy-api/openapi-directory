import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1cputemperatureinfo as shared_googlechromemanagementv1cputemperatureinfo


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1CPUStatusReport:
    r"""GoogleChromeManagementV1CPUStatusReport
    Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    cpu_temperature_info: Optional[list[shared_googlechromemanagementv1cputemperatureinfo.GoogleChromeManagementV1CPUTemperatureInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuTemperatureInfo') }})
    cpu_utilization_pct: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuUtilizationPct') }})
    report_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    sample_frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleFrequency') }})
    
