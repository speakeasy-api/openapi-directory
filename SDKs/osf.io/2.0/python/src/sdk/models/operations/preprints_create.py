import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PreprintsCreatePreprintAttributesInput:
    r"""PreprintsCreatePreprintAttributesInput
    The properties of the preprint entity.
    """
    
    doi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doi') }})
    license_record: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_record') }})
    subjects: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjects') }})
    

@dataclass_json
@dataclasses.dataclass
class PreprintsCreatePreprintRelationshipsInput:
    r"""PreprintsCreatePreprintRelationshipsInput
    URLs to other entities or entity collections that have a relationship to the preprint entity.
    """
    
    node: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    primary_file: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_file') }})
    provider: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    license: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    

@dataclass_json
@dataclasses.dataclass
class PreprintsCreatePreprintInput:
    relationships: PreprintsCreatePreprintRelationshipsInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    attributes: Optional[PreprintsCreatePreprintAttributesInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclasses.dataclass
class PreprintsCreateRequest:
    request: PreprintsCreatePreprintInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PreprintsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
