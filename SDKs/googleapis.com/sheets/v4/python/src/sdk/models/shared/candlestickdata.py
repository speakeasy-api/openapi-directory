import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import candlestickseries as shared_candlestickseries


@dataclass_json
@dataclasses.dataclass
class CandlestickData:
    r"""CandlestickData
    The Candlestick chart data, each containing the low, open, close, and high values for a series.
    """
    
    close_series: Optional[shared_candlestickseries.CandlestickSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeSeries') }})
    high_series: Optional[shared_candlestickseries.CandlestickSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highSeries') }})
    low_series: Optional[shared_candlestickseries.CandlestickSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowSeries') }})
    open_series: Optional[shared_candlestickseries.CandlestickSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openSeries') }})
    
