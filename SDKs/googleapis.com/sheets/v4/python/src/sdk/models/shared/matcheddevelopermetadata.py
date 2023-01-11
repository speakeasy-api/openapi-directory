import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafilter as shared_datafilter
from ..shared import developermetadata as shared_developermetadata


@dataclass_json
@dataclasses.dataclass
class MatchedDeveloperMetadata:
    r"""MatchedDeveloperMetadata
    A developer metadata entry and the data filters specified in the original request that matched it.
    """
    
    data_filters: Optional[list[shared_datafilter.DataFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    developer_metadata: Optional[shared_developermetadata.DeveloperMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    
