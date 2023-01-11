import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carecontextrepresentation as shared_carecontextrepresentation


@dataclass_json
@dataclasses.dataclass
class PatientCareContextLinkPatient:
    care_contexts: list[shared_carecontextrepresentation.CareContextRepresentation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    display: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    reference_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientCareContextLink:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    patient: PatientCareContextLinkPatient = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    
