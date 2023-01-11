import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafilter as shared_datafilter


@dataclass_json
@dataclasses.dataclass
class BatchClearValuesByDataFilterRequest:
    r"""BatchClearValuesByDataFilterRequest
    The request for clearing more than one range selected by a DataFilter in a spreadsheet.
    """
    
    data_filters: Optional[list[shared_datafilter.DataFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    
