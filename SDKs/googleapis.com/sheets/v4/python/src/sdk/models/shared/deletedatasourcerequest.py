import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteDataSourceRequest:
    r"""DeleteDataSourceRequest
    Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.
    """
    
    data_source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    
