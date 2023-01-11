import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ForecastOptions:
    r"""ForecastOptions
    Options used when forecasting the time series and testing the predicted value against the threshold.
    """
    
    forecast_horizon: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecastHorizon') }})
    
