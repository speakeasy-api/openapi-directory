import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import source as shared_source
from ..shared import source as shared_source

class PersonMetadataObjectTypeEnum(str, Enum):
    OBJECT_TYPE_UNSPECIFIED = "OBJECT_TYPE_UNSPECIFIED"
    PERSON = "PERSON"
    PAGE = "PAGE"


@dataclass_json
@dataclasses.dataclass
class PersonMetadata:
    r"""PersonMetadata
    The metadata about a person.
    """
    
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    linked_people_resource_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedPeopleResourceNames') }})
    object_type: Optional[PersonMetadataObjectTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    previous_resource_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousResourceNames') }})
    sources: Optional[list[shared_source.Source]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    

@dataclass_json
@dataclasses.dataclass
class PersonMetadataInput:
    r"""PersonMetadataInput
    The metadata about a person.
    """
    
    sources: Optional[list[shared_source.SourceInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
