import dataclasses
from typing import Optional
from ..shared import transferrequest as shared_transferrequest
from ..shared import error as shared_error


@dataclasses.dataclass
class PatchUsersUserEmailTransferPathParams:
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchUsersUserEmailTransferRequest:
    path_params: PatchUsersUserEmailTransferPathParams = dataclasses.field()
    request: shared_transferrequest.TransferRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchUsersUserEmailTransferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
