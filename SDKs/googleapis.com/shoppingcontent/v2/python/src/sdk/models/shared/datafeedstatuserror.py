import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafeedstatusexample as shared_datafeedstatusexample


@dataclass_json
@dataclasses.dataclass
class DatafeedStatusError:
    r"""DatafeedStatusError
    An error occurring in the feed, like \"invalid price\".
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    examples: Optional[list[shared_datafeedstatusexample.DatafeedStatusExample]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('examples') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
