import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputparameter as shared_inputparameter
from ..shared import resultmetadata as shared_resultmetadata


@dataclass_json
@dataclasses.dataclass
class RuntimeActionSchema:
    r"""RuntimeActionSchema
    Schema of a runtime action.
    """
    
    action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    input_parameters: Optional[list[shared_inputparameter.InputParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputParameters') }})
    result_metadata: Optional[list[shared_resultmetadata.ResultMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultMetadata') }})
    
