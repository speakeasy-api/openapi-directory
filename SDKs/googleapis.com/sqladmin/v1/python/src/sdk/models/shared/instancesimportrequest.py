import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importcontext as shared_importcontext


@dataclass_json
@dataclasses.dataclass
class InstancesImportRequest:
    r"""InstancesImportRequest
    Database instance import request.
    """
    
    import_context: Optional[shared_importcontext.ImportContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importContext') }})
    
