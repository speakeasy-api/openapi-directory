import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HealthInformationNotificationNotificationNotifierTypeEnum(str, Enum):
    HIU = "HIU"
    HIP = "HIP"


@dataclass_json
@dataclasses.dataclass
class HealthInformationNotificationNotificationNotifier:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: HealthInformationNotificationNotificationNotifierTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum(str, Enum):
    TRANSFERRED = "TRANSFERRED"
    FAILED = "FAILED"

class HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum(str, Enum):
    DELIVERED = "DELIVERED"
    OK = "OK"
    ERRORED = "ERRORED"


@dataclass_json
@dataclasses.dataclass
class HealthInformationNotificationNotificationStatusNotificationStatusResponses:
    care_context_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    hi_status: HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiStatus') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class HealthInformationNotificationNotificationStatusNotification:
    hip_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hipId') }})
    session_status: HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionStatus') }})
    status_responses: Optional[list[HealthInformationNotificationNotificationStatusNotificationStatusResponses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusResponses') }})
    

@dataclass_json
@dataclasses.dataclass
class HealthInformationNotificationNotification:
    consent_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    done_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doneAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notifier: HealthInformationNotificationNotificationNotifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifier') }})
    status_notification: HealthInformationNotificationNotificationStatusNotification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusNotification') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    

@dataclass_json
@dataclasses.dataclass
class HealthInformationNotification:
    notification: HealthInformationNotificationNotification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
