import dataclasses
from typing import Optional


@dataclasses.dataclass
class KeysAPICustomPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class KeysAPICustomRequest:
    path_params: KeysAPICustomPathParams = dataclasses.field()
    

@dataclasses.dataclass
class KeysAPICustomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keys_api_custom_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
