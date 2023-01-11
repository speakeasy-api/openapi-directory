import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distance as shared_distance
from ..shared import pagination as shared_pagination


@dataclass_json
@dataclasses.dataclass
class FacilitiesMetadata:
    distances: list[shared_distance.Distance] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('distances') }})
    pagination: shared_pagination.Pagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    
