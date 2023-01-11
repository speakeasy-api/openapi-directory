import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementgitconfig as shared_configmanagementgitconfig
from ..shared import configmanagementociconfig as shared_configmanagementociconfig


@dataclass_json
@dataclasses.dataclass
class ConfigManagementConfigSync:
    r"""ConfigManagementConfigSync
    Configuration for Config Sync
    """
    
    allow_vertical_scale: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowVerticalScale') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    git: Optional[shared_configmanagementgitconfig.ConfigManagementGitConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    oci: Optional[shared_configmanagementociconfig.ConfigManagementOciConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oci') }})
    prevent_drift: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preventDrift') }})
    source_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFormat') }})
    
