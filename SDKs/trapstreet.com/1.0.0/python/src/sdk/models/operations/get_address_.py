import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetAddressPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAddressRequest:
    path_params: GetAddressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
