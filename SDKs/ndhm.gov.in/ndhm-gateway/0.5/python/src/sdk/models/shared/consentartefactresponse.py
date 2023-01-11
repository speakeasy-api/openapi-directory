import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hitypeenum_enum as shared_hitypeenum_enum
from ..shared import consentmanagerpatientid as shared_consentmanagerpatientid
from ..shared import permission as shared_permission
from ..shared import usepurpose as shared_usepurpose
from ..shared import requester as shared_requester
from ..shared import consentstatus_enum as shared_consentstatus_enum
from ..shared import error as shared_error
from ..shared import requestreference as shared_requestreference


@dataclass_json
@dataclasses.dataclass
class ConsentArtefactResponseConsentConsentDetailCareContexts:
    care_context_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    patient_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patientReference') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentArtefactResponseConsentConsentDetailConsentManager:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentArtefactResponseConsentConsentDetailHip:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentArtefactResponseConsentConsentDetailHiu:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentArtefactResponseConsentConsentDetail:
    care_contexts: list[ConsentArtefactResponseConsentConsentDetailCareContexts] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    consent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    consent_manager: ConsentArtefactResponseConsentConsentDetailConsentManager = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentManager') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hi_types: list[shared_hitypeenum_enum.HiTypeEnumEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiTypes') }})
    hip: ConsentArtefactResponseConsentConsentDetailHip = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    hiu: ConsentArtefactResponseConsentConsentDetailHiu = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiu') }})
    patient: shared_consentmanagerpatientid.ConsentManagerPatientID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    permission: shared_permission.Permission = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    purpose: shared_usepurpose.UsePurpose = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: Optional[shared_requester.Requester] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    schema_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentArtefactResponseConsent:
    consent_detail: ConsentArtefactResponseConsentConsentDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentDetail') }})
    signature: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    status: shared_consentstatus_enum.ConsentStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class ConsentArtefactResponse:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: shared_requestreference.RequestReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consent: Optional[ConsentArtefactResponseConsent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consent') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
