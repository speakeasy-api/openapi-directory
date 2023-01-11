import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contentmatcher as shared_contentmatcher
from ..shared import httpcheck as shared_httpcheck
from ..shared import internalchecker as shared_internalchecker
from ..shared import monitoredresource as shared_monitoredresource
from ..shared import resourcegroup as shared_resourcegroup
from ..shared import tcpcheck as shared_tcpcheck

class UptimeCheckConfigCheckerTypeEnum(str, Enum):
    CHECKER_TYPE_UNSPECIFIED = "CHECKER_TYPE_UNSPECIFIED"
    STATIC_IP_CHECKERS = "STATIC_IP_CHECKERS"
    VPC_CHECKERS = "VPC_CHECKERS"

class UptimeCheckConfigSelectedRegionsEnum(str, Enum):
    REGION_UNSPECIFIED = "REGION_UNSPECIFIED"
    USA = "USA"
    EUROPE = "EUROPE"
    SOUTH_AMERICA = "SOUTH_AMERICA"
    ASIA_PACIFIC = "ASIA_PACIFIC"


@dataclass_json
@dataclasses.dataclass
class UptimeCheckConfig:
    r"""UptimeCheckConfig
    This message configures which resources and services to monitor for availability.
    """
    
    checker_type: Optional[UptimeCheckConfigCheckerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkerType') }})
    content_matchers: Optional[list[shared_contentmatcher.ContentMatcher]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentMatchers') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    http_check: Optional[shared_httpcheck.HTTPCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpCheck') }})
    internal_checkers: Optional[list[shared_internalchecker.InternalChecker]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalCheckers') }})
    is_internal: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInternal') }})
    monitored_resource: Optional[shared_monitoredresource.MonitoredResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResource') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    resource_group: Optional[shared_resourcegroup.ResourceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroup') }})
    selected_regions: Optional[list[UptimeCheckConfigSelectedRegionsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedRegions') }})
    tcp_check: Optional[shared_tcpcheck.TCPCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcpCheck') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    user_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    
