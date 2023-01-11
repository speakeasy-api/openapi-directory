import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import tweetexpansionsparamtype_enum as shared_tweetexpansionsparamtype_enum
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


@dataclasses.dataclass
class StreamFilterQueryParams:
    expansions: Optional[list[list[shared_tweetexpansionsparamtype_enum.TweetExpansionsParamTypeEnum]]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expansions', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StreamFilterRequest:
    query_params: StreamFilterQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StreamFilterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    problem: Optional[Any] = dataclasses.field(default=None)
    stream_filter_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
