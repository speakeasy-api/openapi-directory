import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outputconfig as shared_outputconfig


@dataclass_json
@dataclasses.dataclass
class ExportInstanceRequest:
    r"""ExportInstanceRequest
    Request for Export.
    """
    
    output_config: Optional[shared_outputconfig.OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
