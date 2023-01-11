import dataclasses
from typing import Optional
from ..shared import account as shared_account


@dataclasses.dataclass
class RetrieveAccountMetadataPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveAccountMetadataRequest:
    path_params: RetrieveAccountMetadataPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAccountMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    
