import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetingoption as shared_targetingoption


@dataclass_json
@dataclasses.dataclass
class SearchTargetingOptionsResponse:
    r"""SearchTargetingOptionsResponse
    Response message for SearchTargetingOptions.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    targeting_options: Optional[list[shared_targetingoption.TargetingOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptions') }})
    
