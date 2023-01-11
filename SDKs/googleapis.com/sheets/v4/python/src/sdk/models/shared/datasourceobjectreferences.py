import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourceobjectreference as shared_datasourceobjectreference


@dataclass_json
@dataclasses.dataclass
class DataSourceObjectReferences:
    r"""DataSourceObjectReferences
    A list of references to data source objects.
    """
    
    references: Optional[list[shared_datasourceobjectreference.DataSourceObjectReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    
