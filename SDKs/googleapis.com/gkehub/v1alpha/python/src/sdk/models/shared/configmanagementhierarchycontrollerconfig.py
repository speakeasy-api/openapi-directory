import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConfigManagementHierarchyControllerConfig:
    r"""ConfigManagementHierarchyControllerConfig
    Configuration for Hierarchy Controller
    """
    
    enable_hierarchical_resource_quota: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableHierarchicalResourceQuota') }})
    enable_pod_tree_labels: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePodTreeLabels') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
