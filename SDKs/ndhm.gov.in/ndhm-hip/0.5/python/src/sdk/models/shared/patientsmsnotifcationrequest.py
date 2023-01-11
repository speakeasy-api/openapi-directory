import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PatientSmsNotifcationRequestNotificationHip:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientSmsNotifcationRequestNotification:
    care_context_info: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextInfo') }})
    hip: PatientSmsNotifcationRequestNotificationHip = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    phone_no: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNo') }})
    deeplink_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deeplinkUrl') }})
    receiver_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverName') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientSmsNotifcationRequest:
    notification: PatientSmsNotifcationRequestNotification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
