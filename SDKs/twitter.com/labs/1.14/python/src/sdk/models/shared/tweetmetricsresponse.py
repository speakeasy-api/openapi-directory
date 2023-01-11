import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tweetmetrics as shared_tweetmetrics
from ..shared import genericproblem as shared_genericproblem
from ..shared import invalidrequestproblem as shared_invalidrequestproblem
from ..shared import clientforbiddenproblem as shared_clientforbiddenproblem
from ..shared import resourcenotfoundproblem as shared_resourcenotfoundproblem
from ..shared import resourceunauthorizedproblem as shared_resourceunauthorizedproblem
from ..shared import disallowedresourceproblem as shared_disallowedresourceproblem
from ..shared import unsupportedauthenticationproblem as shared_unsupportedauthenticationproblem
from ..shared import usagecapexceededproblem as shared_usagecapexceededproblem
from ..shared import connectionexceptionproblem as shared_connectionexceptionproblem
from ..shared import clientdisconnectedproblem as shared_clientdisconnectedproblem
from ..shared import operationaldisconnectproblem as shared_operationaldisconnectproblem
from ..shared import rulescapproblem as shared_rulescapproblem
from ..shared import invalidruleproblem as shared_invalidruleproblem
from ..shared import duplicateruleproblem as shared_duplicateruleproblem


@dataclass_json
@dataclasses.dataclass
class TweetMetricsResponse:
    data: Optional[list[shared_tweetmetrics.TweetMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    errors: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
