import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import embeddedchart as shared_embeddedchart


@dataclass_json
@dataclasses.dataclass
class AddChartRequest:
    r"""AddChartRequest
    Adds a chart to a sheet in the spreadsheet.
    """
    
    chart: Optional[shared_embeddedchart.EmbeddedChart] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chart') }})
    
