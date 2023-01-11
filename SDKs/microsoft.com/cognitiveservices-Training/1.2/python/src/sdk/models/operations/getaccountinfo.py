import dataclasses
from typing import Optional
from ..shared import account as shared_account


@dataclasses.dataclass
class GetAccountInfoHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountInfoRequest:
    headers: GetAccountInfoHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    body: Optional[bytes] = dataclasses.field(default=None)
    
