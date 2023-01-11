import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicelevelobjective as shared_servicelevelobjective


@dataclass_json
@dataclasses.dataclass
class ListServiceLevelObjectivesResponse:
    r"""ListServiceLevelObjectivesResponse
    The ListServiceLevelObjectives response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    service_level_objectives: Optional[list[shared_servicelevelobjective.ServiceLevelObjective]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLevelObjectives') }})
    
