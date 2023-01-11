import dataclasses
from typing import Any,Optional
from ..shared import sourceaccountresponsev3 as shared_sourceaccountresponsev3


@dataclasses.dataclass
class GetSourceAccountV3PathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSourceAccountV3Request:
    path_params: GetSourceAccountV3PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSourceAccountV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    source_account_response_v3: Optional[shared_sourceaccountresponsev3.SourceAccountResponseV3] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
