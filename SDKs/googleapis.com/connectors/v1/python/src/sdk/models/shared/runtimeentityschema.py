import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import field as shared_field


@dataclass_json
@dataclasses.dataclass
class RuntimeEntitySchema:
    r"""RuntimeEntitySchema
    Schema of a runtime entity.
    """
    
    entity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
