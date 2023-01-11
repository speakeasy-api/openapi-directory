import dataclasses
from typing import Any,Optional
from ..shared import fundingrequestv1 as shared_fundingrequestv1


@dataclasses.dataclass
class CreateAchFundingRequestPathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAchFundingRequestRequest:
    path_params: CreateAchFundingRequestPathParams = dataclasses.field()
    request: shared_fundingrequestv1.FundingRequestV1 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAchFundingRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
