import dataclasses
from typing import Any,Optional
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
from ..shared import tweetmetricsresponse as shared_tweetmetricsresponse


@dataclasses.dataclass
class FindPrivateTweetMetricsByIDQueryParams:
    ids: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class FindPrivateTweetMetricsByIDRequest:
    query_params: FindPrivateTweetMetricsByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FindPrivateTweetMetricsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    problem: Optional[Any] = dataclasses.field(default=None)
    tweet_metrics_response: Optional[shared_tweetmetricsresponse.TweetMetricsResponse] = dataclasses.field(default=None)
    
