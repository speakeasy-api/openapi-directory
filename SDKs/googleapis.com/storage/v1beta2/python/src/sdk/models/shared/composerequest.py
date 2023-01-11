import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import object as shared_object


@dataclass_json
@dataclasses.dataclass
class ComposeRequestSourceObjectsObjectPreconditions:
    r"""ComposeRequestSourceObjectsObjectPreconditions
    Conditions that must be met for this operation to execute.
    """
    
    if_generation_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ifGenerationMatch') }})
    

@dataclass_json
@dataclasses.dataclass
class ComposeRequestSourceObjects:
    generation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object_preconditions: Optional[ComposeRequestSourceObjectsObjectPreconditions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectPreconditions') }})
    

@dataclass_json
@dataclasses.dataclass
class ComposeRequest:
    r"""ComposeRequest
    A Compose request.
    """
    
    destination: Optional[shared_object.Object] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    source_objects: Optional[list[ComposeRequestSourceObjects]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceObjects') }})
    
