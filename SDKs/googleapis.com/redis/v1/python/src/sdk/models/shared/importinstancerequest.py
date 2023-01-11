import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputconfig as shared_inputconfig


@dataclass_json
@dataclasses.dataclass
class ImportInstanceRequest:
    r"""ImportInstanceRequest
    Request for Import.
    """
    
    input_config: Optional[shared_inputconfig.InputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    
