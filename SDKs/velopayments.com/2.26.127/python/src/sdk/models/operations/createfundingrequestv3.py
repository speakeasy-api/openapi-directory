import dataclasses
from typing import Any,Optional
from ..shared import fundingrequestv3 as shared_fundingrequestv3


@dataclasses.dataclass
class CreateFundingRequestV3PathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFundingRequestV3Request:
    path_params: CreateFundingRequestV3PathParams = dataclasses.field()
    request: shared_fundingrequestv3.FundingRequestV3 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFundingRequestV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
