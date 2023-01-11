import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RuntimeConfig:
    r"""RuntimeConfig
    A RuntimeConfig resource is the primary resource in the Cloud RuntimeConfig service. A RuntimeConfig resource consists of metadata and a hierarchy of variables.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
