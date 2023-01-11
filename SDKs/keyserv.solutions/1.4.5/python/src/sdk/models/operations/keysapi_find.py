import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class KeysAPIFindPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class KeysAPIFindRequest:
    path_params: KeysAPIFindPathParams = dataclasses.field()
    

@dataclasses.dataclass
class KeysAPIFindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keys_api_find_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
