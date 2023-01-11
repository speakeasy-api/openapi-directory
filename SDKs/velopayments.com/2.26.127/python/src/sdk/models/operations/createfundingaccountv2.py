import dataclasses
from typing import Any,Optional
from ..shared import createfundingaccountrequestv2 as shared_createfundingaccountrequestv2


@dataclasses.dataclass
class CreateFundingAccountV2Request:
    request: Optional[shared_createfundingaccountrequestv2.CreateFundingAccountRequestV2] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateFundingAccountV2Response:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
