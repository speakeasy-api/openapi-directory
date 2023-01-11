import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import methodselector as shared_methodselector


@dataclass_json
@dataclasses.dataclass
class APIOperation:
    r"""APIOperation
    Identification for an API Operation.
    """
    
    method_selectors: Optional[list[shared_methodselector.MethodSelector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodSelectors') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    
