import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import developermetadatalookup as shared_developermetadatalookup
from ..shared import gridrange as shared_gridrange


@dataclass_json
@dataclasses.dataclass
class DataFilter:
    r"""DataFilter
    Filter that describes what data should be selected or returned from a request.
    """
    
    a1_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('a1Range') }})
    developer_metadata_lookup: Optional[shared_developermetadatalookup.DeveloperMetadataLookup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadataLookup') }})
    grid_range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gridRange') }})
    
