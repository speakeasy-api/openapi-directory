import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafilter as shared_datafilter


@dataclass_json
@dataclasses.dataclass
class SearchDeveloperMetadataRequest:
    r"""SearchDeveloperMetadataRequest
    A request to retrieve all developer metadata matching the set of specified criteria.
    """
    
    data_filters: Optional[list[shared_datafilter.DataFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    
