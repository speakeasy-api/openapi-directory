import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entrypoint as shared_entrypoint


@dataclass_json
@dataclasses.dataclass
class ActionDescription:
    action_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_id') }})
    entry_point: shared_entrypoint.EntryPoint = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_point') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
