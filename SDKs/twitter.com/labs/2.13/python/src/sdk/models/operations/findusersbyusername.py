import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import userexpansionsparameter_enum as shared_userexpansionsparameter_enum
from ..shared import mediafieldsparameter_enum as shared_mediafieldsparameter_enum
from ..shared import placefieldsparameter_enum as shared_placefieldsparameter_enum
from ..shared import pollfieldsparameter_enum as shared_pollfieldsparameter_enum
from ..shared import tweetfieldsparameter_enum as shared_tweetfieldsparameter_enum
from ..shared import userfieldsparameter_enum as shared_userfieldsparameter_enum
from ..shared import genericproblem as shared_genericproblem
from ..shared import invalidrequestproblem as shared_invalidrequestproblem
from ..shared import clientforbiddenproblem as shared_clientforbiddenproblem
from ..shared import resourcenotfoundproblem as shared_resourcenotfoundproblem
from ..shared import resourceunauthorizedproblem as shared_resourceunauthorizedproblem
from ..shared import disallowedresourceproblem as shared_disallowedresourceproblem
from ..shared import unsupportedauthenticationproblem as shared_unsupportedauthenticationproblem
from ..shared import usagecapexceededproblem as shared_usagecapexceededproblem
from ..shared import userlookupresponse as shared_userlookupresponse


@dataclasses.dataclass
class FindUsersByUsernameQueryParams:
    usernames: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'usernames', 'style': 'form', 'explode': False }})
    expansions: Optional[list[shared_userexpansionsparameter_enum.UserExpansionsParameterEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expansions', 'style': 'form', 'explode': False }})
    media_fields: Optional[list[shared_mediafieldsparameter_enum.MediaFieldsParameterEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'media.fields', 'style': 'form', 'explode': False }})
    place_fields: Optional[list[shared_placefieldsparameter_enum.PlaceFieldsParameterEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'place.fields', 'style': 'form', 'explode': False }})
    poll_fields: Optional[list[shared_pollfieldsparameter_enum.PollFieldsParameterEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'poll.fields', 'style': 'form', 'explode': False }})
    tweet_fields: Optional[list[shared_tweetfieldsparameter_enum.TweetFieldsParameterEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tweet.fields', 'style': 'form', 'explode': False }})
    user_fields: Optional[list[shared_userfieldsparameter_enum.UserFieldsParameterEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user.fields', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class FindUsersByUsernameRequest:
    query_params: FindUsersByUsernameQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FindUsersByUsernameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[Any] = dataclasses.field(default=None)
    problem: Optional[Any] = dataclasses.field(default=None)
    user_lookup_response: Optional[shared_userlookupresponse.UserLookupResponse] = dataclasses.field(default=None)
    
