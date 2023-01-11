import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteSourceAccountV3PathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSourceAccountV3Request:
    path_params: DeleteSourceAccountV3PathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSourceAccountV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    inline_response_409: Optional[Any] = dataclasses.field(default=None)
    
