import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carecontextrepresentation as shared_carecontextrepresentation
from ..shared import identifiertype_enum as shared_identifiertype_enum


@dataclass_json
@dataclasses.dataclass
class PatientRepresentation:
    care_contexts: list[shared_carecontextrepresentation.CareContextRepresentation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    display: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    reference_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    matched_by: Optional[list[shared_identifiertype_enum.IdentifierTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedBy') }})
    
