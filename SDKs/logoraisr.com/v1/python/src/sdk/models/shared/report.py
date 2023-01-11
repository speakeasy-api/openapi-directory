import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import result as shared_result


@dataclass_json
@dataclasses.dataclass
class Report:
    file_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_id') }})
    process_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('process_id') }})
    report_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_number') }})
    result_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_id') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    result: Optional[shared_result.Result] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
