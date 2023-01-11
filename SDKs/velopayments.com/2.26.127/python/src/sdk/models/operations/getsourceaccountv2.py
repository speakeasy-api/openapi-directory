import dataclasses
from typing import Any,Optional
from ..shared import sourceaccountresponsev2 as shared_sourceaccountresponsev2


@dataclasses.dataclass
class GetSourceAccountV2PathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSourceAccountV2Request:
    path_params: GetSourceAccountV2PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSourceAccountV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    source_account_response_v2: Optional[shared_sourceaccountresponsev2.SourceAccountResponseV2] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
