import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consentartefactreference as shared_consentartefactreference
from ..shared import consentstatus_enum as shared_consentstatus_enum
from ..shared import error as shared_error
from ..shared import requestreference as shared_requestreference


@dataclass_json
@dataclasses.dataclass
class HiuConsentRequestStatusConsentRequest:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: shared_consentstatus_enum.ConsentStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    consent_artefacts: Optional[list[shared_consentartefactreference.ConsentArtefactReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtefacts') }})
    

@dataclass_json
@dataclasses.dataclass
class HiuConsentRequestStatus:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: shared_requestreference.RequestReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consent_request: Optional[HiuConsentRequestStatusConsentRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentRequest') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
