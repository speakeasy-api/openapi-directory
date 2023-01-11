import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldmetadata as shared_fieldmetadata
from ..shared import fieldmetadata as shared_fieldmetadata


@dataclass_json
@dataclasses.dataclass
class Occupation:
    r"""Occupation
    A person's occupation.
    """
    
    metadata: Optional[shared_fieldmetadata.FieldMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class OccupationInput:
    r"""OccupationInput
    A person's occupation.
    """
    
    metadata: Optional[shared_fieldmetadata.FieldMetadataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
