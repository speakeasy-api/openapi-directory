import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafilter as shared_datafilter


@dataclass_json
@dataclasses.dataclass
class DeleteDeveloperMetadataRequest:
    r"""DeleteDeveloperMetadataRequest
    A request to delete developer metadata.
    """
    
    data_filter: Optional[shared_datafilter.DataFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilter') }})
    
