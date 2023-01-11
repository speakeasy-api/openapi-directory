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


@dataclass_json
@dataclasses.dataclass
class HiuConsentNotificationEventNotification:
    consent_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentRequestId') }})
    status: shared_consentstatus_enum.ConsentStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    consent_artefacts: Optional[list[shared_consentartefactreference.ConsentArtefactReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtefacts') }})
    

@dataclass_json
@dataclasses.dataclass
class HiuConsentNotificationEvent:
    notification: HiuConsentNotificationEventNotification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
