import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patientcarecontextlink as shared_patientcarecontextlink


@dataclass_json
@dataclasses.dataclass
class PatientCareContextLinkRequest:
    link: shared_patientcarecontextlink.PatientCareContextLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
