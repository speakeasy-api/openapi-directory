import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carecontextrepresentation as shared_carecontextrepresentation
from ..shared import error as shared_error
from ..shared import requestreference as shared_requestreference


@dataclass_json
@dataclasses.dataclass
class PatientLinkResultPatient:
    care_contexts: list[shared_carecontextrepresentation.CareContextRepresentation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    display: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    reference_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientLinkResult:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: shared_requestreference.RequestReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    patient: Optional[PatientLinkResultPatient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    
