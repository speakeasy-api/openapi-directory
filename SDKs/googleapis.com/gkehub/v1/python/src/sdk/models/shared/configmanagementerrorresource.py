import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementgroupversionkind as shared_configmanagementgroupversionkind


@dataclass_json
@dataclasses.dataclass
class ConfigManagementErrorResource:
    r"""ConfigManagementErrorResource
    Model for a config file in the git repo with an associated Sync error
    """
    
    resource_gvk: Optional[shared_configmanagementgroupversionkind.ConfigManagementGroupVersionKind] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGvk') }})
    resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    resource_namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNamespace') }})
    source_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePath') }})
    
