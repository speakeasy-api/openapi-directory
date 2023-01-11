import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportkey as shared_reportkey
from ..shared import reportmetadata as shared_reportmetadata
from ..shared import parameters as shared_parameters


@dataclass_json
@dataclasses.dataclass
class Report:
    r"""Report
    Represents a report.
    """
    
    key: Optional[shared_reportkey.ReportKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    metadata: Optional[shared_reportmetadata.ReportMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    params: Optional[shared_parameters.Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
