import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingtypestats as shared_findingtypestats


@dataclass_json
@dataclasses.dataclass
class ListFindingTypeStatsResponse:
    r"""ListFindingTypeStatsResponse
    Response for the `ListFindingTypeStats` method.
    """
    
    finding_type_stats: Optional[list[shared_findingtypestats.FindingTypeStats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingTypeStats') }})
    
