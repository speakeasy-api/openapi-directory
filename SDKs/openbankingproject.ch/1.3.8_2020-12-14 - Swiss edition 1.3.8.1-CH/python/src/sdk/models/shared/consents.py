import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaccess as shared_accountaccess


@dataclass_json
@dataclasses.dataclass
class Consents:
    r"""Consents
    Content of the body of a consent request.
    
    """
    
    access: shared_accountaccess.AccountAccess = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    combined_service_indicator: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedServiceIndicator') }})
    frequency_per_day: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyPerDay') }})
    recurring_indicator: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringIndicator') }})
    valid_until: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
