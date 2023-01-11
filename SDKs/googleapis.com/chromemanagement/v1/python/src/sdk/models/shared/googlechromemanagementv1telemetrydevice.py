import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlechromemanagementv1audiostatusreport as shared_googlechromemanagementv1audiostatusreport
from ..shared import googlechromemanagementv1batteryinfo as shared_googlechromemanagementv1batteryinfo
from ..shared import googlechromemanagementv1batterystatusreport as shared_googlechromemanagementv1batterystatusreport
from ..shared import googlechromemanagementv1bootperformancereport as shared_googlechromemanagementv1bootperformancereport
from ..shared import googlechromemanagementv1cpuinfo as shared_googlechromemanagementv1cpuinfo
from ..shared import googlechromemanagementv1cpustatusreport as shared_googlechromemanagementv1cpustatusreport
from ..shared import googlechromemanagementv1graphicsinfo as shared_googlechromemanagementv1graphicsinfo
from ..shared import googlechromemanagementv1graphicsstatusreport as shared_googlechromemanagementv1graphicsstatusreport
from ..shared import googlechromemanagementv1memoryinfo as shared_googlechromemanagementv1memoryinfo
from ..shared import googlechromemanagementv1memorystatusreport as shared_googlechromemanagementv1memorystatusreport
from ..shared import googlechromemanagementv1networkdiagnosticsreport as shared_googlechromemanagementv1networkdiagnosticsreport
from ..shared import googlechromemanagementv1networkinfo as shared_googlechromemanagementv1networkinfo
from ..shared import googlechromemanagementv1networkstatusreport as shared_googlechromemanagementv1networkstatusreport
from ..shared import googlechromemanagementv1osupdatestatus as shared_googlechromemanagementv1osupdatestatus
from ..shared import googlechromemanagementv1storageinfo as shared_googlechromemanagementv1storageinfo
from ..shared import googlechromemanagementv1storagestatusreport as shared_googlechromemanagementv1storagestatusreport
from ..shared import googlechromemanagementv1thunderboltinfo as shared_googlechromemanagementv1thunderboltinfo


@dataclass_json
@dataclasses.dataclass
class GoogleChromeManagementV1TelemetryDevice:
    r"""GoogleChromeManagementV1TelemetryDevice
    Telemetry data collected from a managed device.
    """
    
    audio_status_report: Optional[list[shared_googlechromemanagementv1audiostatusreport.GoogleChromeManagementV1AudioStatusReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioStatusReport') }})
    battery_info: Optional[list[shared_googlechromemanagementv1batteryinfo.GoogleChromeManagementV1BatteryInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryInfo') }})
    battery_status_report: Optional[list[shared_googlechromemanagementv1batterystatusreport.GoogleChromeManagementV1BatteryStatusReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryStatusReport') }})
    boot_performance_report: Optional[list[shared_googlechromemanagementv1bootperformancereport.GoogleChromeManagementV1BootPerformanceReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootPerformanceReport') }})
    cpu_info: Optional[list[shared_googlechromemanagementv1cpuinfo.GoogleChromeManagementV1CPUInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuInfo') }})
    cpu_status_report: Optional[list[shared_googlechromemanagementv1cpustatusreport.GoogleChromeManagementV1CPUStatusReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuStatusReport') }})
    customer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    graphics_info: Optional[shared_googlechromemanagementv1graphicsinfo.GoogleChromeManagementV1GraphicsInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphicsInfo') }})
    graphics_status_report: Optional[list[shared_googlechromemanagementv1graphicsstatusreport.GoogleChromeManagementV1GraphicsStatusReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphicsStatusReport') }})
    memory_info: Optional[shared_googlechromemanagementv1memoryinfo.GoogleChromeManagementV1MemoryInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryInfo') }})
    memory_status_report: Optional[list[shared_googlechromemanagementv1memorystatusreport.GoogleChromeManagementV1MemoryStatusReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryStatusReport') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_diagnostics_report: Optional[list[shared_googlechromemanagementv1networkdiagnosticsreport.GoogleChromeManagementV1NetworkDiagnosticsReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkDiagnosticsReport') }})
    network_info: Optional[shared_googlechromemanagementv1networkinfo.GoogleChromeManagementV1NetworkInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInfo') }})
    network_status_report: Optional[list[shared_googlechromemanagementv1networkstatusreport.GoogleChromeManagementV1NetworkStatusReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkStatusReport') }})
    org_unit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitId') }})
    os_update_status: Optional[list[shared_googlechromemanagementv1osupdatestatus.GoogleChromeManagementV1OsUpdateStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osUpdateStatus') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    storage_info: Optional[shared_googlechromemanagementv1storageinfo.GoogleChromeManagementV1StorageInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageInfo') }})
    storage_status_report: Optional[list[shared_googlechromemanagementv1storagestatusreport.GoogleChromeManagementV1StorageStatusReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageStatusReport') }})
    thunderbolt_info: Optional[list[shared_googlechromemanagementv1thunderboltinfo.GoogleChromeManagementV1ThunderboltInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thunderboltInfo') }})
    
