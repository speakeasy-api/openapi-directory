import dataclasses
from typing import Any,Optional
from ..shared import sourceaccountresponse as shared_sourceaccountresponse


@dataclasses.dataclass
class GetSourceAccountPathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSourceAccountRequest:
    path_params: GetSourceAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSourceAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    source_account_response: Optional[shared_sourceaccountresponse.SourceAccountResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
