import dataclasses
from typing import Optional
from ..shared import number_details as shared_number_details
from ..shared import response as shared_response
from ..shared import unauthorized as shared_unauthorized


@dataclasses.dataclass
class CancelANumberRequest:
    request: shared_number_details.NumberDetails = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CancelANumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    response: Optional[shared_response.Response] = dataclasses.field(default=None)
    unauthorized: Optional[shared_unauthorized.Unauthorized] = dataclasses.field(default=None)
    
