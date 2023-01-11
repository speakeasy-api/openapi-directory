import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import diagnosticconfig as shared_diagnosticconfig


@dataclass_json
@dataclasses.dataclass
class DiagnoseRuntimeRequest:
    r"""DiagnoseRuntimeRequest
    Request for creating a notebook instance diagnostic file.
    """
    
    diagnostic_config: Optional[shared_diagnosticconfig.DiagnosticConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticConfig') }})
    
