import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billdocumentlink as shared_billdocumentlink


@dataclass_json
@dataclasses.dataclass
class BillDocumentOrVersion:
    date_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    links: list[shared_billdocumentlink.BillDocumentLink] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    note: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
