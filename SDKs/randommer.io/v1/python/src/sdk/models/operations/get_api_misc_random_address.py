import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAPIMiscRandomAddressQueryParams:
    number: int = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    culture: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'culture', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIMiscRandomAddressHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIMiscRandomAddressRequest:
    headers: GetAPIMiscRandomAddressHeaders = dataclasses.field()
    query_params: GetAPIMiscRandomAddressQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIMiscRandomAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
