import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAPIPhoneGenerateQueryParams:
    country_code: str = dataclasses.field(metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    quantity: int = dataclasses.field(metadata={'query_param': { 'field_name': 'Quantity', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPIPhoneGenerateHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIPhoneGenerateRequest:
    headers: GetAPIPhoneGenerateHeaders = dataclasses.field()
    query_params: GetAPIPhoneGenerateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIPhoneGenerateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
