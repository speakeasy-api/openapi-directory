import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LocationContext:
    r"""LocationContext
    Output only. The Geo criteria the restriction applies to.
    """
    
    geo_criteria_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoCriteriaIds') }})
    
