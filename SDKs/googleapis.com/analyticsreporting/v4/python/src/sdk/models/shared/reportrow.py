import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterangevalues as shared_daterangevalues


@dataclass_json
@dataclasses.dataclass
class ReportRow:
    r"""ReportRow
    A row in the report.
    """
    
    dimensions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metrics: Optional[list[shared_daterangevalues.DateRangeValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
