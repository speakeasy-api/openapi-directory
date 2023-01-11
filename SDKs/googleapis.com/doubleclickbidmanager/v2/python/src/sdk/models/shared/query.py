import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import querymetadata as shared_querymetadata
from ..shared import parameters as shared_parameters
from ..shared import queryschedule as shared_queryschedule


@dataclass_json
@dataclasses.dataclass
class Query:
    r"""Query
    Represents a query.
    """
    
    metadata: Optional[shared_querymetadata.QueryMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    params: Optional[shared_parameters.Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    query_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryId') }})
    schedule: Optional[shared_queryschedule.QuerySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryInput:
    r"""QueryInput
    Represents a query.
    """
    
    metadata: Optional[shared_querymetadata.QueryMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    params: Optional[shared_parameters.Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    schedule: Optional[shared_queryschedule.QuerySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
