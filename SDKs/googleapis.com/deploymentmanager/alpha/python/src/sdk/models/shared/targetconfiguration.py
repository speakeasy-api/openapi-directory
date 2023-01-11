import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configfile as shared_configfile
from ..shared import importfile as shared_importfile


@dataclass_json
@dataclasses.dataclass
class TargetConfiguration:
    config: Optional[shared_configfile.ConfigFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    imports: Optional[list[shared_importfile.ImportFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imports') }})
    
