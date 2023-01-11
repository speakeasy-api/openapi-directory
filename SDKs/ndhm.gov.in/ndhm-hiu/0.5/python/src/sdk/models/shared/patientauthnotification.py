import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patientdemographicresponse as shared_patientdemographicresponse
from ..shared import accesstokenvalidity as shared_accesstokenvalidity

class PatientAuthNotificationAuthStatusEnum(str, Enum):
    GRANTED = "GRANTED"
    DENIED = "DENIED"


@dataclass_json
@dataclasses.dataclass
class PatientAuthNotificationAuth:
    r"""PatientAuthNotificationAuth
    depending on the purpose of auth, as specified in /auth/init, the response may include the following 
      1. LINK - only returns **accessToken**
      2. KYC - only returns **patient**
      3. KYC_AND_LINK - returns both **accessToken** and **patient**
    
    """
    
    status: PatientAuthNotificationAuthStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    patient: Optional[shared_patientdemographicresponse.PatientDemographicResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    validity: Optional[shared_accesstokenvalidity.AccessTokenValidity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientAuthNotification:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auth: Optional[PatientAuthNotificationAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    
