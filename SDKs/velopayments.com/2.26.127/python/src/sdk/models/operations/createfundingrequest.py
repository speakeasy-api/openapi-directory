import dataclasses
from typing import Any,Optional
from ..shared import fundingrequestv2 as shared_fundingrequestv2


@dataclasses.dataclass
class CreateFundingRequestPathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFundingRequestRequest:
    path_params: CreateFundingRequestPathParams = dataclasses.field()
    request: shared_fundingrequestv2.FundingRequestV2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFundingRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
