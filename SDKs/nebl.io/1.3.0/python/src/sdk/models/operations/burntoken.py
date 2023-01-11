import dataclasses
from typing import Optional
from ..shared import burntokenrequest as shared_burntokenrequest
from ..shared import error as shared_error
from ..shared import burntokenresponse as shared_burntokenresponse


@dataclasses.dataclass
class BurnTokenRequest:
    request: shared_burntokenrequest.BurnTokenRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BurnTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    burn_token_response: Optional[shared_burntokenresponse.BurnTokenResponse] = dataclasses.field(default=None)
    
