import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportwarning as shared_reportwarning


@dataclass_json
@dataclasses.dataclass
class ReportFooter:
    r"""ReportFooter
    Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
    """
    
    matching_row_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingRowCount') }})
    warnings: Optional[list[shared_reportwarning.ReportWarning]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
