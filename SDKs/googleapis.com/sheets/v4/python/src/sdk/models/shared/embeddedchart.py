import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import embeddedobjectborder as shared_embeddedobjectborder
from ..shared import embeddedobjectposition as shared_embeddedobjectposition
from ..shared import chartspec as shared_chartspec


@dataclass_json
@dataclasses.dataclass
class EmbeddedChart:
    r"""EmbeddedChart
    A chart embedded in a sheet.
    """
    
    border: Optional[shared_embeddedobjectborder.EmbeddedObjectBorder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('border') }})
    chart_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    position: Optional[shared_embeddedobjectposition.EmbeddedObjectPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    spec: Optional[shared_chartspec.ChartSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
