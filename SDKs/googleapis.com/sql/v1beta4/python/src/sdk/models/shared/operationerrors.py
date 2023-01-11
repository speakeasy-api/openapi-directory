import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operationerror as shared_operationerror


@dataclass_json
@dataclasses.dataclass
class OperationErrors:
    r"""OperationErrors
    Database instance operation errors list wrapper.
    """
    
    errors: Optional[list[shared_operationerror.OperationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
