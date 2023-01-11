import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carecontextdefinition as shared_carecontextdefinition
from ..shared import hitypeenum_enum as shared_hitypeenum_enum
from ..shared import permission as shared_permission
from ..shared import usepurpose as shared_usepurpose
from ..shared import requester as shared_requester


@dataclass_json
@dataclasses.dataclass
class ConsentRequestConsentHip:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentRequestConsentHiu:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentRequestConsentPatient:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentRequestConsent:
    hi_types: list[shared_hitypeenum_enum.HiTypeEnumEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiTypes') }})
    hiu: ConsentRequestConsentHiu = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiu') }})
    patient: ConsentRequestConsentPatient = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    permission: shared_permission.Permission = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    purpose: shared_usepurpose.UsePurpose = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: shared_requester.Requester = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    care_contexts: Optional[list[shared_carecontextdefinition.CareContextDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    hip: Optional[ConsentRequestConsentHip] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentRequest:
    consent: ConsentRequestConsent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consent') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
