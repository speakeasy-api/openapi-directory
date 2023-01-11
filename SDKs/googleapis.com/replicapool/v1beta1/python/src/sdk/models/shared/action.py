import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import envvariable as shared_envvariable


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    An action that gets executed during initialization of the replicas.
    """
    
    commands: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    env_variables: Optional[list[shared_envvariable.EnvVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envVariables') }})
    timeout_milli_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutMilliSeconds') }})
    
