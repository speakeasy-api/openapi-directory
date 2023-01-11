import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jurisdictionclassification_enum as shared_jurisdictionclassification_enum


@dataclass_json
@dataclasses.dataclass
class CompactJurisdiction:
    classification: shared_jurisdictionclassification_enum.JurisdictionClassificationEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
