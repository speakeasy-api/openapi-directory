import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namedobject as shared_namedobject
from ..shared import relation as shared_relation


@dataclass_json
@dataclasses.dataclass
class AnnotationExtension:
    filler: Optional[shared_namedobject.NamedObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filler') }})
    relation_chain: Optional[list[shared_relation.Relation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation_chain') }})
    
