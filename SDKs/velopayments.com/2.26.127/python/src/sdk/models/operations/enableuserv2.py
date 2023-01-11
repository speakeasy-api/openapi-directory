import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EnableUserV2PathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnableUserV2Request:
    path_params: EnableUserV2PathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnableUserV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
