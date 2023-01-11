import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import preprocessingconfig as shared_preprocessingconfig


@dataclass_json
@dataclasses.dataclass
class Input:
    r"""Input
    Input asset.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    preprocessing_config: Optional[shared_preprocessingconfig.PreprocessingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preprocessingConfig') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
