import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import chartdata as shared_chartdata


@dataclass_json
@dataclasses.dataclass
class CandlestickDomain:
    r"""CandlestickDomain
    The domain of a CandlestickChart.
    """
    
    data: Optional[shared_chartdata.ChartData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    reversed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reversed') }})
    
