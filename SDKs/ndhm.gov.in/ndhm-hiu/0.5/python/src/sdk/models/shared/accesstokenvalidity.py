import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patientauthpurpose_enum as shared_patientauthpurpose_enum
from ..shared import patientauthrequester as shared_patientauthrequester


@dataclass_json
@dataclasses.dataclass
class AccessTokenValidity:
    expiry: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    purpose: shared_patientauthpurpose_enum.PatientAuthPurposeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: shared_patientauthrequester.PatientAuthRequester = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    
