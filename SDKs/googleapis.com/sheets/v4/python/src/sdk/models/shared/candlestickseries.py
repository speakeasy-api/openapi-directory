import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chartdata as shared_chartdata


@dataclass_json
@dataclasses.dataclass
class CandlestickSeries:
    r"""CandlestickSeries
    The series of a CandlestickData.
    """
    
    data: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
