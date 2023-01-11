import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betadebugtoken as shared_googlefirebaseappcheckv1betadebugtoken


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaListDebugTokensResponse:
    r"""GoogleFirebaseAppcheckV1betaListDebugTokensResponse
    Response message for the ListDebugTokens method.
    """
    
    debug_tokens: Optional[list[shared_googlefirebaseappcheckv1betadebugtoken.GoogleFirebaseAppcheckV1betaDebugToken]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugTokens') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
