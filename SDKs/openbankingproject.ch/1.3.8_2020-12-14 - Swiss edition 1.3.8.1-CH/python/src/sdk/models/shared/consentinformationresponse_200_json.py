import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hreftype as shared_hreftype
from ..shared import accountaccess as shared_accountaccess
from ..shared import consentstatus_enum as shared_consentstatus_enum


@dataclass_json
@dataclasses.dataclass
class ConsentInformationResponse200JSON:
    r"""ConsentInformationResponse200JSON
    Body of the JSON response for a successfull get consent request.
    """
    
    access: shared_accountaccess.AccountAccess = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    consent_status: shared_consentstatus_enum.ConsentStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentStatus') }})
    frequency_per_day: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyPerDay') }})
    last_action_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastActionDate'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recurring_indicator: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringIndicator') }})
    valid_until: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[dict[str, shared_hreftype.HrefType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    
