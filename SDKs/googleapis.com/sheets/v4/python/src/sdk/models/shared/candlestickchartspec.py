import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import candlestickdata as shared_candlestickdata
from ..shared import candlestickdomain as shared_candlestickdomain


@dataclass_json
@dataclasses.dataclass
class CandlestickChartSpec:
    r"""CandlestickChartSpec
    A candlestick chart.
    """
    
    data: Optional[list[shared_candlestickdata.CandlestickData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    domain: Optional[shared_candlestickdomain.CandlestickDomain] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    
