import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authenticationmode_enum as shared_authenticationmode_enum
from ..shared import patientauthpurpose_enum as shared_patientauthpurpose_enum
from ..shared import patientauthrequester as shared_patientauthrequester


@dataclass_json
@dataclasses.dataclass
class PatientAuthInitRequestQuery:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    purpose: shared_patientauthpurpose_enum.PatientAuthPurposeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: shared_patientauthrequester.PatientAuthRequester = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    auth_mode: Optional[shared_authenticationmode_enum.AuthenticationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMode') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientAuthInitRequest:
    query: PatientAuthInitRequestQuery = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
