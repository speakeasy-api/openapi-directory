import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1batterysamplereport as shared_googlechromemanagementv1batterysamplereport

class GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum(str, Enum):
    BATTERY_HEALTH_UNSPECIFIED = "BATTERY_HEALTH_UNSPECIFIED"
    BATTERY_HEALTH_NORMAL = "BATTERY_HEALTH_NORMAL"
    BATTERY_REPLACE_SOON = "BATTERY_REPLACE_SOON"
    BATTERY_REPLACE_NOW = "BATTERY_REPLACE_NOW"


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1BatteryStatusReport:
    r"""GoogleChromeManagementV1BatteryStatusReport
    Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    battery_health: Optional[GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryHealth') }})
    cycle_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycleCount') }})
    full_charge_capacity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullChargeCapacity') }})
    report_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    sample: Optional[list[shared_googlechromemanagementv1batterysamplereport.GoogleChromeManagementV1BatterySampleReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sample') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    
