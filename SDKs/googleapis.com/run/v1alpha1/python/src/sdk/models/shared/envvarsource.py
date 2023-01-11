import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmapkeyselector as shared_configmapkeyselector
from ..shared import secretkeyselector as shared_secretkeyselector


@dataclass_json
@dataclasses.dataclass
class EnvVarSource:
    r"""EnvVarSource
    EnvVarSource represents a source for the value of an EnvVar.
    """
    
    config_map_key_ref: Optional[shared_configmapkeyselector.ConfigMapKeySelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMapKeyRef') }})
    secret_key_ref: Optional[shared_secretkeyselector.SecretKeySelector] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKeyRef') }})
    
