import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pathqueryoptions as shared_pathqueryoptions


@dataclass_json
@dataclasses.dataclass
class Options:
    r"""Options
    Additional query options.
    """
    
    include_only_targeted_user_lists: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeOnlyTargetedUserLists') }})
    path_query_options: Optional[shared_pathqueryoptions.PathQueryOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathQueryOptions') }})
    
