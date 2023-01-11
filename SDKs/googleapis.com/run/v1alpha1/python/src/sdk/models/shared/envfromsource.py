import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmapenvsource as shared_configmapenvsource
from ..shared import secretenvsource as shared_secretenvsource


@dataclass_json
@dataclasses.dataclass
class EnvFromSource:
    r"""EnvFromSource
    Not supported by Cloud Run EnvFromSource represents the source of a set of ConfigMaps
    """
    
    config_map_ref: Optional[shared_configmapenvsource.ConfigMapEnvSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMapRef') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    secret_ref: Optional[shared_secretenvsource.SecretEnvSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretRef') }})
    
