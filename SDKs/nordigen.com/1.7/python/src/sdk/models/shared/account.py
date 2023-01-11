import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Account:
    r"""Account
    The representation of a bank account.
    """
    
    aspsp_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspsp_identifier') }})
    created: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    iban: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iban') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_accessed: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_accessed'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
