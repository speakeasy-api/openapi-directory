import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportcontext as shared_exportcontext


@dataclass_json
@dataclasses.dataclass
class InstancesExportRequest:
    r"""InstancesExportRequest
    Database instance export request.
    """
    
    export_context: Optional[shared_exportcontext.ExportContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportContext') }})
    
