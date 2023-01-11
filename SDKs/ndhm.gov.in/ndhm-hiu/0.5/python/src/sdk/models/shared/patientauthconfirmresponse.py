import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patientdemographicresponse as shared_patientdemographicresponse
from ..shared import accesstokenvalidity as shared_accesstokenvalidity
from ..shared import error as shared_error
from ..shared import requestreference as shared_requestreference


@dataclass_json
@dataclasses.dataclass
class PatientAuthConfirmResponseAuth:
    r"""PatientAuthConfirmResponseAuth
    depending on the purpose of auth, as specified in /auth/init, the response may include the following 
      1. LINK - only returns **accessToken**
      2. KYC - only returns **patient**
      3. KYC_AND_LINK - returns both **accessToken** and **patient**
    
    """
    
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    patient: Optional[shared_patientdemographicresponse.PatientDemographicResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    validity: Optional[shared_accesstokenvalidity.AccessTokenValidity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientAuthConfirmResponse:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: shared_requestreference.RequestReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auth: Optional[PatientAuthConfirmResponseAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
