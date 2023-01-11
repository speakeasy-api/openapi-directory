import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configmapvolumesource as shared_configmapvolumesource
from ..shared import secretvolumesource as shared_secretvolumesource


@dataclass_json
@dataclasses.dataclass
class Volume:
    r"""Volume
    Volume represents a named volume in a container.
    """
    
    config_map: Optional[shared_configmapvolumesource.ConfigMapVolumeSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configMap') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    secret: Optional[shared_secretvolumesource.SecretVolumeSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
