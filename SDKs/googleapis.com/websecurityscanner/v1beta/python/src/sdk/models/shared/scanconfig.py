import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authentication as shared_authentication
from ..shared import scanrun as shared_scanrun
from ..shared import schedule as shared_schedule

class ScanConfigExportToSecurityCommandCenterEnum(str, Enum):
    EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED = "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

class ScanConfigRiskLevelEnum(str, Enum):
    RISK_LEVEL_UNSPECIFIED = "RISK_LEVEL_UNSPECIFIED"
    NORMAL = "NORMAL"
    LOW = "LOW"

class ScanConfigTargetPlatformsEnum(str, Enum):
    TARGET_PLATFORM_UNSPECIFIED = "TARGET_PLATFORM_UNSPECIFIED"
    APP_ENGINE = "APP_ENGINE"
    COMPUTE = "COMPUTE"
    CLOUD_RUN = "CLOUD_RUN"
    CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS"

class ScanConfigUserAgentEnum(str, Enum):
    USER_AGENT_UNSPECIFIED = "USER_AGENT_UNSPECIFIED"
    CHROME_LINUX = "CHROME_LINUX"
    CHROME_ANDROID = "CHROME_ANDROID"
    SAFARI_IPHONE = "SAFARI_IPHONE"


@dataclass_json
@dataclasses.dataclass
class ScanConfig:
    r"""ScanConfig
    A ScanConfig resource contains the configurations to launch a scan.
    """
    
    authentication: Optional[shared_authentication.Authentication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication') }})
    blacklist_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blacklistPatterns') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    export_to_security_command_center: Optional[ScanConfigExportToSecurityCommandCenterEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportToSecurityCommandCenter') }})
    ignore_http_status_errors: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreHttpStatusErrors') }})
    latest_run: Optional[shared_scanrun.ScanRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestRun') }})
    managed_scan: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedScan') }})
    max_qps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxQps') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    risk_level: Optional[ScanConfigRiskLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskLevel') }})
    schedule: Optional[shared_schedule.Schedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    starting_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startingUrls') }})
    static_ip_scan: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticIpScan') }})
    target_platforms: Optional[list[ScanConfigTargetPlatformsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPlatforms') }})
    user_agent: Optional[ScanConfigUserAgentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    
