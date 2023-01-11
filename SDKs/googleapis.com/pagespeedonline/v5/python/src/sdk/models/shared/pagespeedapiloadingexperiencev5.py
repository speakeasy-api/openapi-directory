import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpageloadmetricv5 as shared_userpageloadmetricv5


@dataclass_json
@dataclasses.dataclass
class PagespeedAPILoadingExperienceV5:
    r"""PagespeedAPILoadingExperienceV5
    The CrUX loading experience object that contains CrUX data breakdowns.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initial_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_url') }})
    metrics: Optional[dict[str, shared_userpageloadmetricv5.UserPageLoadMetricV5]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    origin_fallback: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin_fallback') }})
    overall_category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall_category') }})
    
