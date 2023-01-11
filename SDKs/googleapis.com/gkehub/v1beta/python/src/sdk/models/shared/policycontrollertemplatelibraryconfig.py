import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PolicyControllerTemplateLibraryConfig:
    r"""PolicyControllerTemplateLibraryConfig
    The config specifying which default library templates to install.
    """
    
    included: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('included') }})
    
