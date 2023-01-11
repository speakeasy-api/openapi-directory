import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import headers as shared_headers
from ..shared import row as shared_row


@dataclass_json
@dataclasses.dataclass
class Table:
    column_headers: Optional[shared_headers.Headers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnHeaders') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    row_headers: Optional[shared_headers.Headers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowHeaders') }})
    rows: Optional[list[shared_row.Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
