import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Distribution:
    r"""Distribution
    Data about the relative number of devices running a given configuration of the Android platform.
    """
    
    market_share: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketShare') }})
    measurement_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementTime') }})
    
