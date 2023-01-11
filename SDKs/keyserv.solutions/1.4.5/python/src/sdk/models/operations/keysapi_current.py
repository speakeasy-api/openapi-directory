import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class KeysAPICurrentPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class KeysAPICurrentRequest:
    path_params: KeysAPICurrentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class KeysAPICurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keys_api_current_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
