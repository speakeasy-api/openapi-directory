import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldmetadata as shared_fieldmetadata
from ..shared import fieldmetadata as shared_fieldmetadata


@dataclass_json
@dataclasses.dataclass
class ExternalID:
    r"""ExternalID
    An identifier from an external entity related to the person.
    """
    
    formatted_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedType') }})
    metadata: Optional[shared_fieldmetadata.FieldMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ExternalIDInput:
    r"""ExternalIDInput
    An identifier from an external entity related to the person.
    """
    
    metadata: Optional[shared_fieldmetadata.FieldMetadataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
