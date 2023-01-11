import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CareContextDefinition:
    care_context_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    patient_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patientReference') }})
    
