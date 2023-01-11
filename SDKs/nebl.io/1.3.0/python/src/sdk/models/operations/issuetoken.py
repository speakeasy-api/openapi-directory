import dataclasses
from typing import Optional
from ..shared import issuetokenrequest as shared_issuetokenrequest
from ..shared import error as shared_error
from ..shared import issuetokenresponse as shared_issuetokenresponse


@dataclasses.dataclass
class IssueTokenRequest:
    request: shared_issuetokenrequest.IssueTokenRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IssueTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    issue_token_response: Optional[shared_issuetokenresponse.IssueTokenResponse] = dataclasses.field(default=None)
    
