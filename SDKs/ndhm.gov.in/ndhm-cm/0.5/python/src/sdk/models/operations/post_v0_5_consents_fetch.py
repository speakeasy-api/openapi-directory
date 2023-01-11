import dataclasses
from typing import Optional
from ..shared import consentfetchrequest as shared_consentfetchrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05ConsentsFetchHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentsFetchRequest:
    headers: PostV05ConsentsFetchHeaders = dataclasses.field()
    request: shared_consentfetchrequest.ConsentFetchRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentsFetchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
