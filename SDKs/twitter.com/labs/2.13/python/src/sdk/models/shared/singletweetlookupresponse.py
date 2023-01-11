import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import genericproblem as shared_genericproblem
from ..shared import invalidrequestproblem as shared_invalidrequestproblem
from ..shared import clientforbiddenproblem as shared_clientforbiddenproblem
from ..shared import resourcenotfoundproblem as shared_resourcenotfoundproblem
from ..shared import resourceunauthorizedproblem as shared_resourceunauthorizedproblem
from ..shared import disallowedresourceproblem as shared_disallowedresourceproblem
from ..shared import unsupportedauthenticationproblem as shared_unsupportedauthenticationproblem
from ..shared import usagecapexceededproblem as shared_usagecapexceededproblem
from ..shared import expansions as shared_expansions


@dataclass_json
@dataclasses.dataclass
class SingleTweetLookupResponse:
    data: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    errors: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    includes: Optional[shared_expansions.Expansions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    
