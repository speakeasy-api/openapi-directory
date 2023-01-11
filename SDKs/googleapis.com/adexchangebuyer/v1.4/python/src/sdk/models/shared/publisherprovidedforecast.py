import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimension as shared_dimension


@dataclass_json
@dataclasses.dataclass
class PublisherProvidedForecast:
    r"""PublisherProvidedForecast
    This message carries publisher provided forecasting information.
    """
    
    dimensions: Optional[list[shared_dimension.Dimension]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    weekly_impressions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyImpressions') }})
    weekly_uniques: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklyUniques') }})
    
