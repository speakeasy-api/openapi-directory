import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consent as shared_consent
from ..shared import daterange as shared_daterange
from ..shared import keymaterial as shared_keymaterial


@dataclass_json
@dataclasses.dataclass
class HipHealthInformationRequestHiRequest:
    consent: shared_consent.Consent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consent') }})
    data_push_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPushUrl') }})
    date_range: shared_daterange.DateRange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    key_material: shared_keymaterial.KeyMaterial = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyMaterial') }})
    

@dataclass_json
@dataclasses.dataclass
class HipHealthInformationRequest:
    hi_request: HipHealthInformationRequestHiRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiRequest') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
