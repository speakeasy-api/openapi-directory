import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConfigManagementPolicyControllerMonitoringBackendsEnum(str, Enum):
    MONITORING_BACKEND_UNSPECIFIED = "MONITORING_BACKEND_UNSPECIFIED"
    PROMETHEUS = "PROMETHEUS"
    CLOUD_MONITORING = "CLOUD_MONITORING"


@dataclass_json
@dataclasses.dataclass
class ConfigManagementPolicyControllerMonitoring:
    r"""ConfigManagementPolicyControllerMonitoring
    PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: [\"cloudmonitoring\", \"prometheus\"]
    """
    
    backends: Optional[list[ConfigManagementPolicyControllerMonitoringBackendsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backends') }})
    
