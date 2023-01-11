import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import columnheader as shared_columnheader
from ..shared import reportdata as shared_reportdata


@dataclass_json
@dataclasses.dataclass
class Report:
    r"""Report
    The data response corresponding to the request.
    """
    
    column_header: Optional[shared_columnheader.ColumnHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnHeader') }})
    data: Optional[shared_reportdata.ReportData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
