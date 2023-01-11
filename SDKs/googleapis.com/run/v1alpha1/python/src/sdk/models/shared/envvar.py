import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import envvarsource as shared_envvarsource


@dataclass_json
@dataclasses.dataclass
class EnvVar:
    r"""EnvVar
    EnvVar represents an environment variable present in a Container.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_from: Optional[shared_envvarsource.EnvVarSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrom') }})
    
