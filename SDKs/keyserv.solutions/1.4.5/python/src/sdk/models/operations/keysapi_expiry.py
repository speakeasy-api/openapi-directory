import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class KeysAPIExpiryPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class KeysAPIExpiryRequest:
    path_params: KeysAPIExpiryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class KeysAPIExpiryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keys_api_expiry_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
