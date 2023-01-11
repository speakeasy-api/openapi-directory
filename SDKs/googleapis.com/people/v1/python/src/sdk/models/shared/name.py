import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldmetadata as shared_fieldmetadata
from ..shared import fieldmetadata as shared_fieldmetadata


@dataclass_json
@dataclasses.dataclass
class Name:
    r"""Name
    A person's name. If the name is a mononym, the family name is empty.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    display_name_last_first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayNameLastFirst') }})
    family_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    honorific_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('honorificPrefix') }})
    honorific_suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('honorificSuffix') }})
    metadata: Optional[shared_fieldmetadata.FieldMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middleName') }})
    phonetic_family_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticFamilyName') }})
    phonetic_full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticFullName') }})
    phonetic_given_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticGivenName') }})
    phonetic_honorific_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticHonorificPrefix') }})
    phonetic_honorific_suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticHonorificSuffix') }})
    phonetic_middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticMiddleName') }})
    unstructured_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unstructuredName') }})
    

@dataclass_json
@dataclasses.dataclass
class NameInput:
    r"""NameInput
    A person's name. If the name is a mononym, the family name is empty.
    """
    
    family_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    honorific_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('honorificPrefix') }})
    honorific_suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('honorificSuffix') }})
    metadata: Optional[shared_fieldmetadata.FieldMetadataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middleName') }})
    phonetic_family_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticFamilyName') }})
    phonetic_full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticFullName') }})
    phonetic_given_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticGivenName') }})
    phonetic_honorific_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticHonorificPrefix') }})
    phonetic_honorific_suffix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticHonorificSuffix') }})
    phonetic_middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticMiddleName') }})
    unstructured_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unstructuredName') }})
    
