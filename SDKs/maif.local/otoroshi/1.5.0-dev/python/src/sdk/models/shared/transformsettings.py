import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inqueryparam as shared_inqueryparam
from ..shared import inheader as shared_inheader
from ..shared import incookie as shared_incookie
from ..shared import mappingsettings as shared_mappingsettings


@dataclass_json
@dataclasses.dataclass
class TransformSettings:
    r"""TransformSettings
    Settings to transform a JWT token and its location
    """
    
    location: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mapping_settings: shared_mappingsettings.MappingSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappingSettings') }})
    
