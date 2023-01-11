import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAPITextPasswordQueryParams:
    has_digits: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'hasDigits', 'style': 'form', 'explode': True }})
    has_special: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'hasSpecial', 'style': 'form', 'explode': True }})
    has_uppercase: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'hasUppercase', 'style': 'form', 'explode': True }})
    length: int = dataclasses.field(metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPITextPasswordHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPITextPasswordRequest:
    headers: GetAPITextPasswordHeaders = dataclasses.field()
    query_params: GetAPITextPasswordQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPITextPasswordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
