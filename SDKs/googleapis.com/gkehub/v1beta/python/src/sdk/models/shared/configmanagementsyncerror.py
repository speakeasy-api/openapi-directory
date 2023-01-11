import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmanagementerrorresource as shared_configmanagementerrorresource


@dataclass_json
@dataclasses.dataclass
class ConfigManagementSyncError:
    r"""ConfigManagementSyncError
    An ACM created error representing a problem syncing configurations
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    error_resources: Optional[list[shared_configmanagementerrorresource.ConfigManagementErrorResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorResources') }})
    
