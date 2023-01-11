import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import config as shared_config


@dataclass_json
@dataclasses.dataclass
class InstanceInput:
    r"""InstanceInput
    An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
    """
    
    config: Optional[shared_config.ConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
